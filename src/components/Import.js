import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@material-ui/core";

const Import = (props) => {
  return (
    <div>
      <Button variant="contained" color="primary" onCLick={props.fetchMakes}>
        Import
      </Button>
      <Container>
        <Table>
          <TableBody>
            {props.makes.map((make) => (
              <TableRow key={make.id}>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Import;
