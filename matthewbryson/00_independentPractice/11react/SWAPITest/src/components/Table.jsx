const Table = ({ data }) => {
    return (
        <table>
         <thead>
            <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Eye Color</th>
            </tr>
         </thead>
         <tbody>
         {data.map((character) => (
            <tr key={character}>
                <td>{character.name}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.hair_color}</td>
                <td>{character.eye_color}</td>
            </tr>
         ))}
         </tbody>
        </table>
        );
};
export default Table;

