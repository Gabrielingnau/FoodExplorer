import { useEffect, useState } from "react";
import { PiCaretLeft } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";

import Upload from "../../assets/Upload.svg";
import { Button } from "../../componentes/Button";
import { ButtonText } from "../../componentes/ButtonText";
import { Footer } from "../../componentes/Footer";
import { HeaderAdmin } from "../../componentes/HeaderAdmin";
import { HeaderMobiAdmin } from "../../componentes/HeaderMobiAdmin";
import { Input } from "../../componentes/Input";
import { Label } from "../../componentes/Label";
import { NewItem } from "../../componentes/NewItem";
import { Textarea } from "../../componentes/Textarea";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Container, Main } from "./style";

export function Atualizar() {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;
  const { updatedProducts, getProduct, product } = useAuth();

  useEffect(() => {
    async function fetcProducts() {
      const response = await api.get(`/products/${params.id}`);
      setTitle(response.data.title);
    }
    fetcProducts();
  }, []);

  useEffect(() => {
    async function fetcProducts() {
      const response = await api.get(`/products/${params.id}`);
      setValue(response.data.value);
    }
    fetcProducts();
  }, []);

  useEffect(() => {
    async function fetcProducts() {
      const response = await api.get(`/products/${params.id}`);
      setCategory(response.data.category);
    }
    fetcProducts();
  }, []);

  useEffect(() => {
    async function fetcProducts() {
      const response = await api.get(`/products/${params.id}`);
      setDescription(response.data.description);
    }
    fetcProducts();
  }, []);

  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  getProduct(id);

  useEffect(() => {
    async function fetcProducts() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetcProducts();
  }, []);

  async function remove(id) {
    await api.delete(`/ingredients/${id}`);
    const response = await api.get(`/products/${params.id}`);
    setData(response.data);
  }

  function handleAddIngredients() {
    setIngredients((prevStat) => [...prevStat, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevStat) =>
      prevStat.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleUpdateProduct() {
    const dataIngredients = data.ingredients.map(function (ingredient) {
      return ingredient.name;
    });

    try {
      if (ingredients) {
        const product = {
          title,
          category,
          value,
          description,
          ingredients,
        };
        updatedProducts({ product, id });
      } else {
        const product = {
          title,
          category,
          value,
          description,
        };
        updatedProducts({ product, id });
      }

      if (avatarFile === null) {
        async function Avatar() {
          const avatarURL = (await data) && `${api.defaults.baseURL}/files/${data.avatar}`
          const fileUploadForm = new FormData()
          await fileUploadForm.append("avatar", avatarURL)

          await api.patch(`products/${params.id}`, fileUploadForm)
        }
        

        Avatar();
      } else {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        await api.patch(`products/${params.id}`, fileUploadForm);
      }

      alert("Prato atualizado com sucesso");
      navigate("/");
    } catch (error) {
      await api.put(`/products/${params.id}`, {
        title: data.title,
        category: data.category,
        value: data.value,
        description: data.description,
        ingredients: dataIngredients,
      });
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar este prato");
      }
    }
  }

  async function handleRemove() {
    const confirm = window.confirm(
      "Deseja realmente remover esse produto do site?"
    );

    if (confirm) {
      await api.delete(`/products/${params.id}`);
      alert("Produto excluído com sucesso");
      navigate("/");
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <HeaderAdmin />
      <HeaderMobiAdmin />
      {data && (
        <Main>
          <div className="titulo">
            <ButtonText
              onClick={handleBack}
              icon={PiCaretLeft}
              title="Voltar"
            />
            <h1>Editar prato</h1>
          </div>
          <div className="edite">
            <div className="image">
              <span>Imagem do prato</span>
              <div className="inputImage">
                <label htmlFor="imageUpload">
                  Selecione imagem para alterá-la
                </label>
                <div className="file">
                  <img src={Upload} alt="" />
                  <Input
                    id="imageUpload"
                    type="file"
                    placeholder="Selecione imagem"
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="name">
              <Label title="name" id="name">
                <Input
                  id="name"
                  type="text"
                  placeholder={product.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Label>
            </div>
            <div className="category">
              <Label
                placeholder={product.category}
                value={category}
                id="category"
                title="Categoria"
              ></Label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
              >
                <option value="Pratos">Pratos</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>

          <div className="ingrediente">
            <div className="newItem">
              <Label id="item" title="Ingredientes"></Label>

              <div id="item" className="Item">
                {data.ingredients.map((ingredient, index) => (
                  <NewItem
                    key={String(index)}
                    value={ingredient.name}
                    onClick={() => {
                      remove(ingredient.id);
                    }}
                  />
                ))}
                {ingredients.map((ingredient, index) => (
                  <NewItem
                    onClick={() => {
                      handleRemoveIngredients(ingredient);
                    }}
                    value={ingredient}
                    key={String(index)}
                  />
                ))}

                <NewItem
                  isNew
                  onClick={handleAddIngredients}
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                />
              </div>
            </div>
            <div className="value">
              <Label title="Preço" id="value">
                <Input
                  id="value"
                  type="text"
                  placeholder={product.value}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Label>
            </div>
          </div>
          <div className="description">
            <Label id="descrip" title="Descrição"></Label>
            <div className="textarea">
              <Textarea
                id="descrip"
                maxLength={90}
                placeholder={product.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons">
            <div className="adicionar">
              <Button onClick={handleRemove} title="Excluir prato" />
              <Button onClick={handleUpdateProduct} title="Salvar alterações" />
            </div>
          </div>
        </Main>
      )}
      <Footer />
    </Container>
  );
}
