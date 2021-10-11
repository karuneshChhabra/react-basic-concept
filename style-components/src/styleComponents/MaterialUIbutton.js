import Button from '@material-ui/core/Button';
import styled from "styled-components";

export default styled(Button)`
&&{
    background-color:red;
    color:white;
    font-size:1.5rem;
    border-radius:10px;
    border:2px black solid;
    &:hover{
        background-color:blue;
    }
}
`;
