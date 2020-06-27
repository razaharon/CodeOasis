import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import Peer from "../../interfaces/Peer";
import { useSelector, useDispatch } from "react-redux";
import { removePeer } from "../../peer-store/actions";
import "./PeersTable.css";
import avgReducer from "../../utils/avgReducer";

const isBetterYearIndicator = (
  currentYearValue: number,
  lastYearValue: number
): JSX.Element | void => {
  if (currentYearValue === lastYearValue) return;
  if (currentYearValue > lastYearValue) {
    return <span style={{ color: "green" }}>&#9650;</span>;
  } else {
    return <span style={{ color: "red" }}>&#9660;</span>;
  }
};

export default function PeersTable() {
  const dispatch = useDispatch();
  const peers: Peer[] = useSelector((state: Peer[]) => state);

  return (
    <TableContainer className="table-container" component={Paper}>
      <div className="table-header">
        <h1>C</h1>
        <h3>See Peers Volatility</h3>
        <h4>Time to liquidity event: {peers.length}</h4>
      </div>
      {peers.length ? generateTable() : <i>No peers to display</i>}
    </TableContainer>
  );

  function generateTable(): JSX.Element {
    return (
      <Table size="small">
        <TableHead>
          <TableRow className="green-row">
            <TableCell>Peer Company</TableCell>
            <TableCell>1 Year</TableCell>
            <TableCell>2 Years</TableCell>
            <TableCell>3 Years</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {peers.map((peer) => (
            <TableRow key={peer.id}>
              <TableCell>{peer.name}</TableCell>
              <TableCell>{peer.years[0]}%</TableCell>
              <TableCell>
                {peer.years[1]}%
                {isBetterYearIndicator(peer.years[1], peer.years[0])}
              </TableCell>
              <TableCell>
                {peer.years[2]}%
                <Button
                  className="remove-button"
                  onClick={() => dispatch(removePeer(peer.id))}
                >
                  &#x2715;
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="green-row">
            <TableCell>Average</TableCell>
            <TableCell>
              {peers.map((peer) => peer.years[0]).reduce(avgReducer, 0)}%
            </TableCell>
            <TableCell>
              {peers.map((peer) => peer.years[1]).reduce(avgReducer, 0)}%
            </TableCell>
            <TableCell>
              {peers.map((peer) => peer.years[2]).reduce(avgReducer, 0)}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
