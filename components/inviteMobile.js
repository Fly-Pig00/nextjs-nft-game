import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(player, user, level, id, score) {
  return { player, user, level, id, score };
}

const rows = [
  createData("bob", "8/8/22", "richard", 6, 21),
  createData("richard", "8/8/22", "richard", 6, 21),
  createData("sam", "8/8/22", "richard", 6, 21),
  createData("rick", "8/8/22", "richard", 6, 21),
  createData("adam", "8/8/22", "richard", 6, 21),
];

export default function Leaderboard() {
  return (
    <div className="leaderboard invite-mobile">
      {rows.map((row) => (
        <TableContainer key={row.id} style={{paddingBottom:"60px"}}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell>@player</TableCell>
                <TableCell align="right">
                  {row.player}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Applied On</TableCell>
                <TableCell align="right">{row.user}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Referrer</TableCell>
                <TableCell align="right">{row.level}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Accept</TableCell>
                <TableCell align="right">{row.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Waitlist</TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell align="right">
                  <div className="invite-button2">Profile</div>
                  <div className="invite-button">Accept</div>
                </TableCell>
              </TableRow>

              <TableRow
                key={row.player}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              ></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}
