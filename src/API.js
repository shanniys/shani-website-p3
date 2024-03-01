import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Table from 'react-bootstrap/Table';

function API() {

    return (
      <Table striped="columns">
      <thead>
        <tr>
          <th>Name</th>
          <th>Relationship</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Allan Vargas Arga</td>
          <td>Father</td>
          <td>53</td>
        </tr>
        <tr>
          <td>Eden Azuela Arga</td>
          <td>Mother</td>
          <td>46</td>
        </tr>
        <tr>
          <td>Ma. Joy Mae Arga</td>
          <td>Sister</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Alden Arga</td>
          <td>Brother</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Ma. Edelene Arga</td>
          <td>Sister</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Ma. Michelle Arga</td>
          <td>Sister</td>
          <td>10</td>
        <tr>
          <td>Aldrin Arga</td>
          <td>Brother</td>
          <td>8</td>
        </tr>
        </tr>

      </tbody>
    </Table>
    );

  }
  
  export default API;