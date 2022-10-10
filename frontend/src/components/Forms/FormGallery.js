import React, {useState} from 'react'

const FormGallery = () => {

    const [gallery, setGallery] = useState([])


    return (
        <div>
            <form>
                <div className="divFormGroup">
                    <label htmlFor="productGallery">Gallerie</label>
                    <input type="file" id="productGallery" name="productGallery" onChange={(e) => setProductGallery(e.target.files[0])} placeholder="Jean" />
                </div>
                <button type="submit">Enregistert</button>
            </form>
        </div>
    )
}

export default FormGallery