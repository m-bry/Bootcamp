const Table = (props) => {
    const { persons } = props;
    const theCharacters = persons.map(character => {
        return (
            //The commented out code below didn't make sense to me. Seems to work fine with using {character} instead of {character.name}
            // <tr key={character.name}>
            <tr key={character}>
                <td>{character.name}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.hair_color}</td>
                <td>{character.eye_color}</td>
            </tr>
        )
    });

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Star Wars Characters</h1>
            <table className="table table-striped m-auto">
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
                    {theCharacters}
                </tbody>
            </table>
        </div>
    );
}

//I can't explain this very well, but I can tell you that none of the apps we've built in react
//Have had curly braces around the element being exported.
// export {Table};
//Also, we need to add 'default'.
export default Table;