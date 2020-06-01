import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const games = [
    `[Date "2020-04-07"]
    [Result "1-0"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "The Cagey Opener"]
    1.d4 Nc6 2.d5 Nb4 3.a3 Na6 4.e4 e5 5.dxe6 fxe6 6.Qh5+ g6 7.Qe5 Qf6 8.Qa5 b6 9.Qc3 Bb7 10.Nh3 O-O-O 11.Bg5 Qg7 12.Nd2 Kb8 13.Bxd8 c5 14.Nf3 h6 15.Ne5 Bc8 16.Rd1 d6 17.Nc4 Bb7 18.Nxd6 Bxd6 19.Rxd6 Qxc3+ 20.bxc3 Bxe4 21.Bxa6 Nf6 22.Bxf6 Kc7 23.Rxe6 Rf8 24.f3 Bxc2 25.Be5+ Kd7 26.Rd6+ Ke7 27.O-O Ba4 28.Rxg6 Kf7 29.Rxh6 Bb3 30.Ng5+ Ke8 31.Bc8 1-0`,
    `[Date "2020-04-26"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "Lord of the Rings"]
    [Result "2-0"]
    1.e4 d5 2.Nc3 Nf6 3.Bb5+ Nc6 4.Qe2 a6 5.Ba4 b5 6.Bb3 Nd4 7.Qd3 e5 8.Nf3 dxe4 9.Qe3 exf3 10.Qxe5+ Be7 11.O-O Bf5 12.d3 O-O 13.Qe1 Qd6 14.g3 Bh3 15.Bf4 Qc6 16.Qxe7 Ne6 17.Rfe1 Rfe8 18.Qa3 Bg2 19.Qb4 Rad8 20.h4 Rd4 21.Qa5 Ng4 22.Bxe6 Ra4 23.Qxc7 Qxc7 24.Bxc7 fxe6 25.b3 Rc8 26.Bb8 g5 27.bxa4 Rxb8 28.Re4 h5 29.hxg5 Rc8 30.Nb1 Rf8 31.Rxe6 Kg7 32.Rxa6 Re8 33.Na3 Re2 34.Nxb5 h4 35.gxh4 Rxf2 36.h5 Bh3 37.Ra7+ Kf8 38.h6 Rg2+ 39.Kh1 Nf2# 0-1`,
    `[Date "2020-05-07"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "Game of Thrones"]
    [Result "2-1"]
    1.d4 d5 2.c4 e6 3.Nc3 Nc6 4.Nf3 Bb4 5.Bg5 Qd7 6.e4 h6 7.Bd2 Nf6 8.Bd3 O-O 9.a3 Ba5 10.Be3 dxe4 11.Ne5 Nxe5 12.Be2 Nc6 13.O-O b6 14.f3 exf3 15.Bxf3 Bb7 16.Nb5 a6 17.Nc3 b5 18.cxb5 Bxc3 19.bxc6 Bxc6 20.bxc3 Nd5 21.Qd2 f5 22.c4 Nb6 23.Rac1 g5 24.Bh5 f4 25.Bf2 e5 26.c5 Na4 27.Qa2+ Qd5 28.Qc4 Kh8 29.Bd1 Qxg2# 1-0`,
    `[Date "2020-05-16"]
    [White "Iceman"]
    [Black "Titan"]
    [Result "3-1"]
    [Event "The Empire Strikes Back"]
    1.e4 e5 2.Nc3 d6 3.Qe2 Nc6 4.b3 Nf6 5.Ba3 Nd4 6.Qd3 c5 7.O-O-O d5 8.exd5 c4 9.Qxc4 Bxa3+ 10.Kb1 O-O 11.Qa4 Qd6 12.Nf3 Ng4 13.Re1 Qb4 14.Qxb4 Bxb4 15.Nxe5 Nxf2 16.Rg1 f6 17.Nd3 Bxc3 18.Nxf2 Bxd2 19.Rd1 Be3 20.Nh3 Nf5 21.Bc4 Nd6 22.Rge1 Re8 23.Rd3 Bxh3 24.Rdxe3 Rxe3 25.Rxe3 Bxg2 26.Bd3 Bxd5 27.Re2 Rc8 28.c4 Bf7 29.h4 Re8 30.Kb2 Rxe2+ 31.Bxe2 Nf5 32.a4 b6 33.b4 Be8 34.Ka3 g5 35.hxg5 fxg5 36.c5 Nd4 37.Bd3 g4 38.Be4 Bc6 39.Bxc6 Nxc6 40.Kb3 g3 41.Kc2 g2 42.Kd2 g1=Q 43.Kc3 Qxc5+ 44.Kb2 Nd4 45.Ka2 Qc2+ 46.Ka1 Nb3# 0-1`,
    `[Date "2020-05-24"]
    [Result "4-1"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "A Misplaced Knight"]
    1.d4 d5 2.c4 dxc4 3.Bf4 b5 4.a4 a6 5.e3 Nf6 6.axb5 Bg4 7.Be2 h5 8.Qa4 Qd7 9.Nc3 g6 10.bxa6 Nc6 11.Nf3 Bh6 12.Bxh6 Rxh6 13.O-O h4 14.Rfd1 Nxd4 15.Rxd4 Qxa4 16.Rxa4 h3 17.Nb5 hxg2 18.Rf4 Nd7 19.Rd4 Ne5 20.Nxe5 Bxe2 21.Nxc7+ Kf8 22.Nxa8 Kg7 23.Kxg2 f6 24.Nxc4 g5 25.Nc7 g4 26.Ne6+ Kf7 27.a7 Bf3+ 28.Kg1 Kxe6 29.e4 f5 30.a8=Q Kf7 31.Ne5+ Kf6 32.Nd7+ Kg5 33.Qf8 Rh3 34.Ra3 e5 35.Qxf5+ Kh4 36.Nxe5 Rxh2 37.Ng6+ Kh3 38.Qh5# 0-1`,
    `[Date "2020-05-30"]
    [Result "4-2"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "Titanic Footle"]
    1.e3 g5 2.Bc4 d5 3.Bb3 b5 4.Nc3 c6 5.e4 b4 6.Na4 e5 7.exd5 cxd5 8.c3 bxc3 9.bxc3 d4 10.Qe2 Nc6 11.Bb2 Nf6 12.O-O-O Qa5 13.h4 Bh6 14.hxg5 Bxg5 15.Nf3 Rg8 16.cxd4 Nxd4 17.Nxd4 Bg4 18.f3 O-O-O 19.Qc4+ Qc7 20.Nb5 Be6 21.Qxc7# 1-0`,
  ];


  useEffect(() => {
    games.forEach((g, i) => {
      window.pgnView(`board${i}`, { pgn: g, width: null, layout: 'left', theme: 'zeit', pieceStyle: 'merida' });
    });
  });

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="games">
          {games.map((g, i) => (
            <div
              className="game"
              key={i}
            >
              <div id={`board${i}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
