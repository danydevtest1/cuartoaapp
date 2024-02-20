import React from 'react'

export default function DatosPersonales() {
  return (

    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Datos Personales</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-12">
    
    <input type="text" class="form-control" 
    id="validationCustom01" value=""
    placeholder='Nombre completo'
    required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-12">
   
    <input type="text" class="form-control"
    id="validationCustom02" value=""
    placeholder='Dirección'
     required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-12">
    
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control"
       id="validationCustomUsername" 
       placeholder='Correo'
       aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-12">
   
    <input type="text" class="form-control" 
    id="validationCustom03"
    placeholder='Estado'
     required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button 
    class="btn btn-primary" 
    type="submit">Enviar</button>
  </div>
</form>
  </div>
</div>


  )
}
