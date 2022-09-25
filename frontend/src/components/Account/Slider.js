import React from 'react'

const Slider = ({number}) => {
  return (
    <div className="divBannerItem">
        <h2>Bannière #{number}</h2>

        <div className="divFormGroup">
            <label htmlFor="">Titre</label>
            <input type="text" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Image de couverture</label>
            <input type="file" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Description</label>
            <textarea name="" id=""></textarea>
        </div>
        
        <div className="divFormGroup">
            <label htmlFor="">Lien de redirection</label>
            <input type="text" />
        </div>

    </div>
  )
}

export default Slider