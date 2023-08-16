import { Container, Main } from "./style";
import { ButtonText } from "../../componentes/ButtonText";
import { Button } from "../../componentes/Button";
import { Footer } from "../../componentes/Footer";
import { HeaderAdmin } from "../../componentes/HeaderAdmin";
import { HeaderMobiAdmin } from "../../componentes/HeaderMobiAdmin";
import { PiCaretLeft } from 'react-icons/pi';
import { Input } from "../../componentes/Input";
import { Label } from "../../componentes/Label";
import { NewItem } from "../../componentes/NewItem";
import { Textarea } from "../../componentes/Textarea";
import Upload from '../../assets/upload.svg';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export function Atualizar() {

  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState(0)
  const [avatarFile, setAvatarFile] = useState({ });

  const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

  const params = useParams()

  function handleAddIngredients() {
    setIngredients(prevStat => [...prevStat, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevStat => prevStat.filter(ingredient => ingredient !== deleted))
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setAvatarFile(file);
  }

  useEffect(() => {
    async function fetcProducts () {
      const response = await api.get(`/products/${params.id}`)
      setData(response.data)
    }

    fetcProducts()
  }, [])
  
  async function handleUpdateProduct() {
    const dataIngredients = data.ingredients.map(function (ingredient){
       return ingredient.name
    })
    try {
      if(category) {
        await api.put(`/products/${params.id}`, {
          title: data.title,
          category,
          value: data.value,
          description:data .description,
          ingredients: dataIngredients
        });
      }
      if(value) {
        await api.put(`/products/${params.id}`, {
          title: data.title,
          category: data.category,
          value,
          description:data .description,
          ingredients: dataIngredients
        });
      }
      if(description) {
        await api.put(`/products/${params.id}`, {
          title: data.title,
          category: data.category,
          value: data.value,
          description,
          ingredients: dataIngredients
        });
      }
      if(title) {
        await api.put(`/products/${params.id}`, {
          title,
          category: data.category,
          value: data.value,
          description:data .description,
          ingredients: dataIngredients
        });
      }
      if(!category && !value && !description && !title){
        await api.put(`/products/${params.id}`, {
          title: data.title,
          category: data.category,
          value: data.value,
          description:data .description,
          ingredients: dataIngredients
        });
      }

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        await api.patch(`/avatar/${params.id}`, fileUploadForm);
      }

      alert("Prato atualizado com sucesso");
      navigate("/");
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar este prato")
      }
    }

  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover esse produto do site?")

    if(confirm){
        await api.delete(`/products/${params.id}`)
        alert("Produto excluído com sucesso")
        navigate("/")
    }

}    
      
  function handleBack() {
    navigate(-1);
  }


    return (
        <Container>
          <HeaderAdmin/>
          <HeaderMobiAdmin/>
          {data &&
          <Main>
            <div className="titulo">
               <ButtonText onClick={handleBack} icon={PiCaretLeft} title="Voltar"/>
               <h1>Editar prato</h1>
            </div>
            <div className="edite">
            <div className="image">
                            <span>Imagem do prato</span>
                            <div className="inputImage">
                            <label htmlFor="imageUpload">Selecione imagem</label>
                            <div className="file">
                            <img src={Upload} alt="" />
                            <Input
                                    id="imageUpload"
                                    type="file"
                                    placeholder="Selecione imagem"
                                    onChange={handleImage}
                                />

                            </div>                           
                            </div>
                        </div>
               <div className="name">
               <Label title="name" id="name">
                <Input id="name"
                       type="text"                       
                       placeholder="Salada Ceasar"
                       onChange={e => setTitle(e.target.value)}
                       />
               </Label>
               </div>
               <div className="category">
                <Label id="category" title="Categoria"></Label>
                <select onChange={e => setCategory(e.target.value)} id="category">     
                   <option value="Selecionar">Selecionar</option>
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
                    onClick={() => { handleRemoveIngredients(ingredient)}}
                    />
                  ))
                  }
                  {
                    ingredients.map((ingredient, index) => (
                      <NewItem
                        onClick={() => { handleRemoveIngredients(ingredient)}}
                        value={ingredient}
                        key={String(index)}
                  />
                    ))
                  }

                  <NewItem
                  isNew
                  onClick={handleAddIngredients}
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  />
            
              </div>

  
              </div>
              <div className="value">
              <Label title="Preço" id="value">
                <Input id="value"
                       type="text"
                       value={data.value}
                       placeholder="R$ 00,00"
                       onChange={e => setValue(e.targetvalue)}
                       />
               </Label>
              </div>
            </div>
            <div className="description">
            <Label id="descrip" title="Descrição"></Label>
               <div className="textarea">
               <Textarea 
               id="descrip"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                maxLength={90}
                value={data.description}
                onChange={ e => setDescription(e.target.value)}
               />
               </div>
            </div>
            <div className="buttons">
               <div className="adicionar">
                <Button onClick={handleRemove} title="Excluir prato"/>
                <Button onClick={handleUpdateProduct} title="Salvar alterações"/>
               </div>
            </div>          
          </Main>

          }
        <Footer/>
        </Container>
    )
}