import Button from '@material-ui/core/Button';
import styled from "styled-components";

export default styled(Button)`
&&{
    background-color:red;
    color:white;
    font-size:1.5rem;

    &:hover{
        background-color:blue;
    }
}
`;
