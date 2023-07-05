import React from "react";
import fondo from "../asset/servicio.png";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Table1({ data }) {
  return (
    <div>
      <h5 className="mb-4 d-flex justify-content-center">Horas de servicio registradas hasta la fecha</h5>
      <div className="tablas mt-5 table-responsive">
        <Table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Revisadas</th>
              <th scope="col">Nombre</th>
              <th scope="col">Matricula</th>
              <th scope="col">Email</th>
              <th scope="col">Pais</th>
              <th scope="col">Comentario</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id} className="table-success">
                <th>
                  <Form>
                    {["checkbox"].map((type) => (
                      <div
                        key={`default-${type}`}
                        className={
                          student.check ? "table-success" : "table-danger"
                        }
                      >
                        <Form.Check type={type} />
                      </div>
                    ))}
                  </Form>
                </th>
                <td>{student.name}</td>
                <td>{student.matricula}</td>
                <td>{student.email}</td>
                <td>{student.pais}</td>
                <td>
                  {/* {student.email} */}
                  <Form.Control as="textarea" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <img
          className="imagen-service w-100"
          src={fondo}
          alt="servicio-imagen"
        />
      </div>
    </div>
  );
}

export default Table1;
