
export function TableRow () {
  
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th scope="col">Person</th>
          <th scope="col">Most interest in</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th scope="row">Chris</th>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">Dennis</th>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <th scope="row">Sarah</th>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">Karen</th>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Average age</th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  );
};

