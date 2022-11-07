import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(number, user, level, id, score) {
  return { number, user, level, id, score };
}

const rows = [
  createData("1", "Mydas", 6, 4823924, 40843),
  createData("2", "Mydas", 9, 4823924, 40843),
  createData("3", "Mydas", 16, 4823924, 40843),
  createData("4", "Mydas", 3, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
];

export default function Leaderboard() {
  return (
    <div className="leaderboard mobile">
    {rows.map((row) => (
      <TableContainer key={row.id} style={{paddingBottom:"60px"}}>
        <Table size="small" style={{width:"400px"}} aria-label="a dense table">
          <TableBody>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">
                {row.number}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>USER</TableCell>
              <TableCell align="right">{row.user}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LEVEL</TableCell>
              <TableCell align="right">{row.level}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">{row.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SCORE</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    ))}
  </div>
  );
}
