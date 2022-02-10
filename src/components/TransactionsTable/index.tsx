import { useEffect } from 'react'
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api('/transactions')
      .then(response => console.log(response.data))
  }, []);

  return(
    <Container>
       <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead> 
          <tbody>
              <tr>
                <td>Desenvolvimento de Website</td>
                <td className="deposit">R$ 12.000</td>
                <td>Desenvolvimento</td>
                <td>06/02/2022</td>  
              </tr>
              <tr>
                <td>Aluguel Sala</td>
                <td className="withdraw"> - R$ 1.500</td>
                <td>Fixo</td>
                <td>03/02/2022</td>  
              </tr>
              <tr>
                <td>Café</td>
                <td className="withdraw"> - R$ 200</td>
                <td>Consumo</td>
                <td>02/02/2022</td>  
              </tr>
          </tbody>
       </table>
    </Container>
  );
}