import React, { useState } from 'react'
import axios from 'axios'

const FormCategory = () => {

    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryImg, setCategoryImg] = useState(null)
    const [categoryDesc, setCategoryDesc] = useState("")

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        const newCategory = { categoryTitle, categoryDesc}

        if(categoryImg){
            const data = new FormData();
            const filename = Date.now() + categoryImg.name;
            data.append("name",filename);
            data.append("file",categoryImg);
            newCategory.categoryImg = filename;
        }

        try{
            let res = await axios.post("/categories/", newCategory);
            console.log("Saved => ",res)
        }
        catch(err){
         console.log(err) 
        }


        console.log("New category => ", newCategory)

    }


    return (
        <form id="formCategory" className='form' onSubmit={handleSubmitForm} method="POST">
            <div className="divFormGroup">
                <label htmlFor="">Nom de la catégorie <span className="required">*</span></label>
                <input type="text" placeholder="Jean" onChange={(e) => setCategoryTitle(e.target.value)} />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Image de la catégorie <span className="required">*</span></label>
                <input type="file" placeholder="Jean" onChange={(e) => setCategoryImg(e.target.files[0])} />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Description de la catégorie</label>
                <textarea placeholder='Message' onChange={(e)=> setCategoryDesc(e.target.value)}></textarea>
            </div>

            <p> <span className="required">*</span> Champs requis !</p>

            <button type="submit">Enregistrer</button>
        </form>
    )
}

export default FormCategory