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
import Upload from '../../assets/Upload.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {

  const navigate = useNavigate()

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState(0)
  const [avatarFile, setAvatarFile] = useState(null);


  function handleAddIngredients() {
    setIngredients(prevStat => [...prevStat, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevStat => prevStat.filter(ingredient => ingredient !== deleted))
  }

  function handleBack() {
    navigate(-1);
  }
  
  async function handleNewProduct(){
    try{
      if(avatarFile == null) {
        return alert("Voçe precisa adicionar uma imagem para o produto!");
      }
      if(newIngredient){
        return alert("você deixou um ingrediente no campo sem adicionar, clique no + para adicionar ou deixe o campo vazio.")
      }
      
      
      const formData = new FormData()
      formData.append("avatar", avatarFile)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("value", value)
      
      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append("ingredients", ingredients[i]);
    }
    
    await api.post("/products", formData)
    alert("Produto adicionado com sucesso!")
    navigate(-1);
  }catch(error) {
    if(error.response) {
      alert(error.response.data.message)
    }else{
      alert("Não foi possivel adicionar o produto")
    }
  }
}
      
      

    return (
        <Container>
          <HeaderAdmin/>
          <HeaderMobiAdmin/>
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
                                    onChange={ e => setAvatarFile(e.target.files[0])}
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
                <select id="category" onChange={e => setCategory(e.target.value)}>     
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
                       placeholder="R$ 00,00"
                       onChange={e => setValue(e.target.value)}
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
                onChange={ e => setDescription(e.target.value)}
               />
               </div>
            </div>
            <div className="buttons">
               <div className="adicionar">
                <Button onClick={handleNewProduct} title="Adicionar prato"/>
               </div>
            </div>          
          </Main>
        <Footer/>
        </Container>
    )
}