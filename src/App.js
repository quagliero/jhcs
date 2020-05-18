import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const games = [
    `[Date "2020-04-07"]
    [Result "1-0"]
    [White "Titan"]
    [Black "Iceman"]
    1.d4 Nc6 2.d5 Nb4 3.a3 Na6 4.e4 e5 5.dxe6 fxe6 6.Qh5+ g6 7.Qe5 Qf6 8.Qa5 b6 9.Qc3 Bb7 10.Nh3 O-O-O 11.Bg5 Qg7 12.Nd2 Kb8 13.Bxd8 c5 14.Nf3 h6 15.Ne5 Bc8 16.Rd1 d6 17.Nc4 Bb7 18.Nxd6 Bxd6 19.Rxd6 Qxc3+ 20.bxc3 Bxe4 21.Bxa6 Nf6 22.Bxf6 Kc7 23.Rxe6 Rf8 24.f3 Bxc2 25.Be5+ Kd7 26.Rd6+ Ke7 27.O-O Ba4 28.Rxg6 Kf7 29.Rxh6 Bb3 30.Ng5+ Ke8 31.Bc8 1-0`,
    `[Date "2020-04-26"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "Lord of the Rings"]
    [Result "0-1"]
    1.e4 d5 2.Nc3 Nf6 3.Bb5+ Nc6 4.Qe2 a6 5.Ba4 b5 6.Bb3 Nd4 7.Qd3 e5 8.Nf3 dxe4 9.Qe3 exf3 10.Qxe5+ Be7 11.O-O Bf5 12.d3 O-O 13.Qe1 Qd6 14.g3 Bh3 15.Bf4 Qc6 16.Qxe7 Ne6 17.Rfe1 Rfe8 18.Qa3 Bg2 19.Qb4 Rad8 20.h4 Rd4 21.Qa5 Ng4 22.Bxe6 Ra4 23.Qxc7 Qxc7 24.Bxc7 fxe6 25.b3 Rc8 26.Bb8 g5 27.bxa4 Rxb8 28.Re4 h5 29.hxg5 Rc8 30.Nb1 Rf8 31.Rxe6 Kg7 32.Rxa6 Re8 33.Na3 Re2 34.Nxb5 h4 35.gxh4 Rxf2 36.h5 Bh3 37.Ra7+ Kf8 38.h6 Rg2+ 39.Kh1 Nf2# 0-1`,
    `[Date "2020-06-07"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "Game of Thrones"]
    [Result "1-0"]
    1.d4 d5 2.c4 e6 3.Nc3 Nc6 4.Nf3 Bb4 5.Bg5 Qd7 6.e4 h6 7.Bd2 Nf6 8.Bd3 O-O 9.a3 Ba5 10.Be3 dxe4 11.Ne5 Nxe5 12.Be2 Nc6 13.O-O b6 14.f3 exf3 15.Bxf3 Bb7 16.Nb5 a6 17.Nc3 b5 18.cxb5 Bxc3 19.bxc6 Bxc6 20.bxc3 Nd5 21.Qd2 f5 22.c4 Nb6 23.Rac1 g5 24.Bh5 f4 25.Bf2 e5 26.c5 Na4 27.Qa2+ Qd5 28.Qc4 Kh8 29.Bd1 Qxg2# 1-0`,
  ]

  useEffect(() => {
    games.forEach((g, i) => {
      window.pgnView(`board${i}`, { pgn: g, width: null, layout: 'left', theme: 'zeit', pieceStyle: 'merida' });
    });
  });

  return (
    <div className="App">
      <Header/>
      <div className="games">
        {games.map((g, i) => (
          <div className="game">
            <div id={`board${i}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
