import {Button, FloatingLabel, Form} from "react-bootstrap";

const Search = () => {
    return (
        <Form>

            <Form.Group className="my-3">
            <FloatingLabel controlId="floatingInput" label="Search:" className="mb-3">
                <Form.Control type="text" placeholder="Search" />
            </FloatingLabel>
            </Form.Group>

            <Button variant="outline-success" type="button">Search</Button>


        </Form>
    );
};

export default Search;