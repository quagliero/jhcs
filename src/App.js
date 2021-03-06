import React, { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const [ score, setScore ] = useState('0-0');

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
    `[Date "2020-06-09"]
    [Result "4-3"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "Harry Potter"]
    1.d4 Nc6 2.Nf3 e6 3.e4 Bb4+ 4.c3 Ba5 5.Bd3 Qe7 6.b4 Bb6 7.a4 a5 8.b5 Nd8 9.Be3 d5 10.e5 Nh6 11.Bxh6 gxh6 12.c4 c5 13.bxc6 Nxc6 14.O-O dxc4 15.Bxc4 Rg8 16.Qd3 Rg7 17.Nc3 Bd7 18.Rab1 Nb4 19.Qe4 Bc6 20.d5 exd5 21.Nxd5 Bxd5 22.Bxd5 O-O-O 23.Rfc1+ Kb8 24.Rd1 h5 25.Nh4 Rdg8 26.g3 Rg4 27.Qxh7 Qxh4 28.Qxf7 Rxg3+ 29.Bg2 Rxg2+ 30.Kf1 Rxf2+ 31.Ke1 Rg1# 1-0`,
    `[Date "2020-06-22"]
    [Result "5-3"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "Fußball"]
    1.e3 e5 2.d4 exd4 3.exd4 d5 4.Qe2+ Qe7 5.Nf3 Bf5 6.Bg5 Qxe2+ 7.Bxe2 Bxc2 8.Nc3 Be4 9.Nxe4 dxe4 10.Ne5 Nf6 11.O-O-O Nbd7 12.Bc4 Nxe5 13.dxe5 Ng4 14.e6 f6 15.Be3 Nxe3 16.fxe3 Rd8 17.Rd7 Rxd7 18.exd7+ Kxd7 19.Rd1+ Bd6 20.h4 f5 21.Be2 Ke7 22.g4 g6 23.Rd4 Bc5 24.Ra4 Bxe3+ 25.Kb1 Kd6 26.Rb4 b6 27.Ra4 a5 28.b4 Re8 29.bxa5 f4 30.a6 f3 31.Bd1 Ke5 32.a7 Ra8 33.h5 b5 34.Ra5 Bxa7 35.Rxb5+ Kf4 36.Rb7 Bb6 37.hxg6 hxg6 38.Kb2 e3 39.Kc2 Rxa2+ 40.Kb1 Rd2 41.Kc1 f2 42.Rb8 Bc5 43.Rf8+ Bxf8 44.Be2 Rxe2 45.g5 Ba3+ 46.Kd1 f1=Q# 0-1`,
    `[Date "2020-07-05"]
    [Result "6-3"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "Two Dimensional Chess"]
    1.d4 Nc6 2.d5 Nb8 3.e4 d6 4.c4 Nf6 5.Nc3 g6 6.Nf3 h5 7.Be3 Bg4 8.c5 dxc5 9.Qa4+ Nbd7 10.Ng5 b5 11.Bxb5 Qc8 12.Ba6 Qb8 13.Rb1 Bh6 14.h3 Bf5 15.exf5 gxf5 16.f4 O-O 17.Bd3 Nb6 18.Qd1 Qc8 19.Bxc5 Re8 20.O-O e6 21.Bd4 Bg7 22.Bxf6 Bxf6 23.Qxh5 Bd4+ 24.Kh2 Kf8 25.Qxf7# 1-0`,
    `[Date "2020-07-19"]
    [Result "7-3"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "A Long Summer Knight"]
    1.e4 d6 2.f3 Nf6 3.d4 e6 4.e5 dxe5 5.dxe5 Qxd1+ 6.Kxd1 Nd5 7.c4 Ne7 8.Nc3 h5 9.Nb5 Na6 10.Bd2 g6 11.f4 Bd7 12.Be2 Nc6 13.g4 O-O-O 14.Rc1 Nd4 15.Nxd4 hxg4 16.Bxg4 Rh4 17.Bf3 Bh6 18.Nge2 c5 19.Nb3 Ba4 20.Rc2 Nb4 21.a3 Nd3 22.Nxc5 Nxc5 23.Kc1 Nb3+ 24.Kb1 Nxd2+ 25.Rxd2 Rxd2 26.Nc3 Bb3 27.Nb5 Rxf4 28.Nxa7+ Kb8 29.Nc6+ Kc7 30.Na5 Bc2+ 31.Ka2 Rxf3 32.Rc1 Rxh2 33.Ra1 Bd2 34.b4 b6 35.Rb1 bxa5 36.bxa5 Bxb1+ 37.Kxb1 Rh1+ 38.Kc2 Rf2 39.a6 Rc1+ 40.Kd3 Rc3+ 41.Kd4 Kc6 42.a7 Rf4# 0-1`,
    `[Date "2020-09-17"]
    [Result "8-3"]
    [White "Titan"]
    [Black "Iceman"]
    [Event "Queenside Castling"]
    1.d4 Na6 2.e4 c5 3.d5 d6 4.Bb5+ Bd7 5.Nc3 g6 6.Qe2 Nc7 7.f4 a6 8.Bxd7+ Qxd7 9.Bd2 h5 10.O-O-O O-O-O 11.Nf3 Bh6 12.Rhe1 Nf6 13.e5 Ng4 14.h3 e6 15.hxg4 exd5 16.gxh5 gxh5 17.f5 Qxf5 18.exd6 Rxd6 19.Nh4 Qf6 20.Qxh5 Bg7 21.Qg4+ Kb8 22.Nf5 Bf8 23.Bf4 Qg6 24.Qxg6 fxg6 25.Nxd6 Bh6 26.Ne2 b5 27.Nf7 Rh7 28.Nxh6 Kb7 29.c3 Rh8 30.b4 cxb4 31.cxb4 Rc8 32.Nc3 Rd8 33.Re7 Ka8 34.Rxc7 Kb8 35.Rxd5 Re8 36.Kd2 Rf8 37.Rf7+ Ka8 38.Rxf8+ Kb7 39.Rb8+ Kc6 40.Nf7 g5 41.Nd8# 1-0`,
    `[Date "2020-10-30"]
    [Result "8-4"]
    [White "Iceman"]
    [Black "Titan"]
    [Event "Winter is Coming"]
    
    1.e4 e5 2.Nf3 d6 3.Nc3 Nf6 4.Bb5+ c6 5.Bd3 Be6 6.O-O Nbd7 7.b4 Qb6 8.Ba3 d5 9.Re1 O-O-O 10.Qc1 a5 11.bxa5 Qxa5 12.Bxf8 Rhxf8 13.Qb2 Nc5 14.Rab1 d4 15.Ra1 Nxd3 16.cxd3 dxc3 17.dxc3 Rxd3 18.Reb1 b5 19.Qb4 Qa7 20.Qxf8+ Rd8 21.Qxg7 Nxe4 22.Rf1 Nxc3 23.Qxe5 Nxa2 24.h4 b4 25.Ng5 Bd5 26.Nxh7 Qc7 27.Qe2 Nc3 28.Ra8+ Kd7 29.Nf6+ Kd6 30.Qe8 Rxa8 31.Qxa8 Ne2+ 32.Kh1 Ke6 33.Re1 Bxg2+ 34.Kxg2 Qg3+ 35.fxg3 Kxf6 36.Rxe2# 1-0`,
  ];


  useEffect(() => {
    games.forEach((g, i) => {
      window.pgnView(`board${i}`, { pgn: g, width: null, layout: 'left', theme: 'zeit', pieceStyle: 'merida' });
      // get the result from the most recent game
      if (i === (games.length - 1)) {
        setScore(g.match(/"\w-\w"/)[0].replaceAll('"', ''));
      }
    });
  });

  return (
    <div className="App">
      <Header score={score}/>
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
