import Form from "react-bootstrap/Form";
function Formm() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-content-center align-items-center container vh-100">
        <Form
          action="http://127.0.0.1:8000/api/students/service/add"
          method="POST"
          className=" form-control"
        >
          <div>
            <label className="me-2">Matricula</label>
            <input type="text" name="matricula" id="" />
          </div>
          <input type="text" name="servicio"/>
          {/* <select
            className="form-select w-25 m-0"
            aria-label="Default select example"
          >
            <option selected>Seleccione la hora de servicio</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
          <div>
            <label className="me-2">Nivel</label>
            <input type="number" name="nivel" placeholder="ingresa el nivel" />
          </div>

          <div>
            <label className="me-2">Cantidad</label>
            <input
              type="number"
              name="cantidad"
              placeholder="ingresa la cantidad"
            />
          </div>

          <div>
            <button type="submit" name="Enviar" className="btn btn-primary">
              Registrar
            </button>
          </div>

          {/* <input type="number" name="cantidad" /><br/>
          <input type="submit" value="Enviar" /> */}
        </Form>
      </div>
    </>
  );
}

export default Formm;
