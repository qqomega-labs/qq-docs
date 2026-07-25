import { useState, useMemo, useCallback, useRef } from "react";

const DIMS = [
  { key: "macro", label: "Macro", short: "MAC", weight: 0.20, color: "#ff4d94" },
  { key: "fund", label: "Fundamentals", short: "FND", weight: 0.20, color: "#ffd700" },
  { key: "token", label: "Tokenomics", short: "TKN", weight: 0.20, color: "#66d9ff" },
  { key: "chain", label: "On-Chain", short: "OCH", weight: 0.20, color: "#b388ff" },
  { key: "tech", label: "Technical", short: "TEC", weight: 0.20, color: "#69f0ae" },
];

const CATS = {
  sov:{l:"Store of Value",c:"#ffd700"},l1:{l:"L1",c:"#b388ff"},l2:{l:"L2",c:"#ff6b6b"},
  defi:{l:"DeFi",c:"#66d9ff"},pay:{l:"Payments",c:"#69f0ae"},cex:{l:"Exchange",c:"#ff4d94"},
  meme:{l:"Meme",c:"#ffab40"},infra:{l:"Infra",c:"#80cbc4"},ai:{l:"AI",c:"#ea80fc"},
  rwa:{l:"RWA",c:"#a1887f"},lsd:{l:"Liquid Staking",c:"#ffcc80"},game:{l:"Gaming",c:"#f48fb1"},
};

const RAW = [
  {s:"BTC",n:"Bitcoin",cat:"sov",macro:97,fund:72,token:93,chain:88,tech:82},
  {s:"ETH",n:"Ethereum",cat:"l1",macro:82,fund:95,token:78,chain:92,tech:68},
  {s:"HYPE",n:"Hyperliquid",cat:"cex",macro:42,fund:88,token:88,chain:88,tech:78},
  {s:"SOL",n:"Solana",cat:"l1",macro:58,fund:82,token:55,chain:80,tech:80},
  {s:"AAVE",n:"Aave",cat:"defi",macro:45,fund:85,token:72,chain:82,tech:70},
  {s:"BNB",n:"BNB",cat:"cex",macro:55,fund:70,token:74,chain:65,tech:68},
  {s:"MKR",n:"Maker",cat:"defi",macro:48,fund:80,token:78,chain:70,tech:60},
  {s:"LINK",n:"Chainlink",cat:"infra",macro:52,fund:85,token:48,chain:68,tech:62},
  {s:"PENDLE",n:"Pendle",cat:"defi",macro:30,fund:72,token:70,chain:68,tech:65},
  {s:"JUP",n:"Jupiter",cat:"defi",macro:28,fund:68,token:62,chain:72,tech:60},
  {s:"XRP",n:"Ripple",cat:"pay",macro:62,fund:58,token:35,chain:52,tech:70},
  {s:"ENA",n:"Ethena",cat:"defi",macro:28,fund:65,token:50,chain:62,tech:58},
  {s:"INJ",n:"Injective",cat:"l1",macro:22,fund:42,token:60,chain:32,tech:45},
  {s:"UNI",n:"Uniswap",cat:"defi",macro:40,fund:80,token:45,chain:78,tech:58},
  {s:"AVAX",n:"Avalanche",cat:"l1",macro:35,fund:48,token:48,chain:38,tech:48},
  {s:"SUI",n:"Sui",cat:"l1",macro:28,fund:50,token:32,chain:42,tech:65},
  {s:"CRV",n:"Curve",cat:"defi",macro:25,fund:65,token:55,chain:58,tech:42},
  {s:"RAY",n:"Raydium",cat:"defi",macro:18,fund:52,token:55,chain:58,tech:48},
  {s:"RUNE",n:"THORChain",cat:"defi",macro:22,fund:55,token:52,chain:48,tech:40},
  {s:"ADA",n:"Cardano",cat:"l1",macro:32,fund:28,token:58,chain:22,tech:42},
  {s:"STX",n:"Stacks",cat:"l1",macro:35,fund:48,token:50,chain:38,tech:52},
  {s:"LDO",n:"Lido",cat:"lsd",macro:30,fund:62,token:42,chain:55,tech:38},
  {s:"DOGE",n:"Dogecoin",cat:"meme",macro:48,fund:20,token:30,chain:42,tech:55},
  {s:"DOT",n:"Polkadot",cat:"l1",macro:25,fund:35,token:38,chain:28,tech:32},
  {s:"ATOM",n:"Cosmos",cat:"infra",macro:25,fund:40,token:35,chain:32,tech:35},
  {s:"TIA",n:"Celestia",cat:"infra",macro:28,fund:60,token:32,chain:42,tech:45},
  {s:"OP",n:"Optimism",cat:"l2",macro:32,fund:55,token:38,chain:48,tech:42},
  {s:"ARB",n:"Arbitrum",cat:"l2",macro:32,fund:58,token:35,chain:55,tech:40},
  {s:"FET",n:"Fetch.ai",cat:"ai",macro:30,fund:50,token:42,chain:40,tech:58},
  {s:"ONDO",n:"Ondo",cat:"rwa",macro:35,fund:55,token:38,chain:42,tech:52},
  {s:"RENDER",n:"Render",cat:"ai",macro:28,fund:52,token:45,chain:38,tech:55},
  {s:"GRT",n:"The Graph",cat:"infra",macro:22,fund:55,token:40,chain:48,tech:42},
  {s:"JTO",n:"Jito",cat:"defi",macro:18,fund:50,token:38,chain:52,tech:45},
  {s:"TRX",n:"Tron",cat:"pay",macro:28,fund:32,token:28,chain:45,tech:32},
  {s:"TON",n:"Toncoin",cat:"l1",macro:28,fund:38,token:25,chain:38,tech:35},
  {s:"AERO",n:"Aerodrome",cat:"defi",macro:12,fund:48,token:55,chain:52,tech:45},
  {s:"TAO",n:"Bittensor",cat:"ai",macro:25,fund:65,token:55,chain:52,tech:65},
  {s:"KAS",n:"Kaspa",cat:"l1",macro:15,fund:22,token:50,chain:25,tech:48},
  {s:"FIL",n:"Filecoin",cat:"infra",macro:22,fund:45,token:35,chain:38,tech:42},
  {s:"NEAR",n:"Near",cat:"l1",macro:22,fund:40,token:35,chain:32,tech:40},
  {s:"SEI",n:"Sei",cat:"l1",macro:15,fund:28,token:28,chain:22,tech:42},
  {s:"PYTH",n:"Pyth",cat:"infra",macro:20,fund:48,token:30,chain:40,tech:42},
  {s:"MATIC",n:"Polygon",cat:"l2",macro:28,fund:45,token:32,chain:38,tech:35},
  {s:"DYDX",n:"dYdX",cat:"defi",macro:18,fund:48,token:42,chain:45,tech:38},

  // ═══ TOKENOMICS GEMS: high circ, no/dumped VC, buyback/burn, real utility ═══
  {s:"BANANA",n:"Banana Gun",cat:"defi",macro:12,fund:58,token:88,chain:62,tech:55},
  {s:"GMX",n:"GMX",cat:"defi",macro:15,fund:55,token:78,chain:52,tech:48},
  {s:"GNO",n:"Gnosis",cat:"infra",macro:22,fund:60,token:75,chain:48,tech:42},
  {s:"LQTY",n:"Liquity",cat:"defi",macro:10,fund:52,token:82,chain:45,tech:40},
  {s:"CVX",n:"Convex",cat:"defi",macro:10,fund:50,token:72,chain:48,tech:35},
  {s:"YFI",n:"Yearn",cat:"defi",macro:12,fund:48,token:80,chain:42,tech:38},
];

const TOTAL = RAW.length;
function composite(c) { return DIMS.reduce((s,d)=>s+(c[d.key]||0)*d.weight,0); }
// Illustrative score used only by this public product concept.
function qqScore(comp) { return Math.round(comp); }
function rankAll(sk) {
  const sc = RAW.map(c=>({...c,comp:composite(c)}));
  sc.sort((a,b)=>sk==="comp"?b.comp-a.comp:(b[sk]||0)-(a[sk]||0));
  return sc.map((c,i)=>({...c,rank:i+1,qq:qqScore(composite(c))}));
}

/*
  Fibonacci sphere — even distribution on unit sphere.
  Returns points on surface, north pole = front.
*/
function fibSphere(n) {
  const pts = [];
  const phi = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(1 - (2*i)/(n-1));
    const azimuth = (2 * Math.PI * i) / phi;
    pts.push({
      x: Math.sin(theta) * Math.cos(azimuth),
      y: Math.sin(theta) * Math.sin(azimuth),
      z: Math.cos(theta),
    });
  }
  // Surface repulsion: push apart points that are too close on the unit sphere.
  // This fixes the north-pole crowding where BTC/ETH/HYPE stack.
  const minArc = Math.sqrt((4 * Math.PI) / n) * 0.95; // min angular distance
  for (let pass = 0; pass < 8; pass++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[j].x - pts[i].x, dy = pts[j].y - pts[i].y, dz = pts[j].z - pts[i].z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < minArc && dist > 0.001) {
          const push = (minArc - dist) / dist * 0.3;
          // Push both along the tangent (then re-normalize to sphere)
          const wi = i === 0 ? 0 : 0.4; // #1 barely moves
          const wj = i === 0 ? 1 : 0.6;
          pts[i].x -= dx * push * wi; pts[i].y -= dy * push * wi; pts[i].z -= dz * push * wi;
          pts[j].x += dx * push * wj; pts[j].y += dy * push * wj; pts[j].z += dz * push * wj;
          // Re-project onto unit sphere
          for (const p of [pts[i], pts[j]]) {
            const len = Math.sqrt(p.x*p.x + p.y*p.y + p.z*p.z);
            p.x /= len; p.y /= len; p.z /= len;
          }
        }
      }
    }
  }
  return pts;
}

function rotate3D(p, rx, ry) {
  let x1 = p.x*Math.cos(ry) + p.z*Math.sin(ry);
  let z1 = -p.x*Math.sin(ry) + p.z*Math.cos(ry);
  let y2 = p.y*Math.cos(rx) - z1*Math.sin(rx);
  let z2 = p.y*Math.sin(rx) + z1*Math.cos(rx);
  return { x: x1, y: y2, z: z2 };
}

/*
  Hexagon SVG pointy-top, centered at 0,0.
  Returns path string for a hexagon of given radius.
*/
function hexPath(r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`);
  }
  return `M ${pts.join(" L ")} Z`;
}

function getHexColor(rank) {
  const t = (rank - 1) / (TOTAL - 1);
  const h = 335 - t * 10, s = 95 - t * 30, l = 44 + t * 22;
  return { h, s, l, t };
}

/* Detail panel */
function Detail({ data, onClose }) {
  const ci = CATS[data.cat];
  return (
    <div style={{
      position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",
      background:"rgba(8,3,8,.96)",backdropFilter:"blur(28px)",
      border:`1px solid ${ci?.c||"#ff4d94"}33`,borderRadius:16,padding:"10px 16px",
      display:"flex",alignItems:"center",gap:14,zIndex:500,animation:"fadeUp .3s ease both",
      boxShadow:`0 0 25px ${ci?.c||"#ff4d94"}15,0 6px 20px rgba(0,0,0,.6)`,
      maxWidth:440,width:"90%",
    }}>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:3,flexWrap:"wrap"}}>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontWeight:800,fontSize:18,color:"#fff"}}>#{data.rank}</span>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:15,color:"#fff"}}>{data.s}</span>
          <span style={{fontSize:10,color:"rgba(255,255,255,.3)"}}>{data.n}</span>
          <span style={{padding:"1px 5px",borderRadius:3,fontSize:7,background:`${ci?.c}12`,color:ci?.c,border:`1px solid ${ci?.c}22`,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>{ci?.l}</span>
        </div>
        <div style={{display:"flex",gap:6,marginBottom:4,flexWrap:"wrap"}}>
          {DIMS.map(d=><span key={d.key} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:d.color,opacity:.8}}>{d.short}:{data[d.key]}</span>)}
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#ff4d94",fontWeight:700}}>= {data.comp.toFixed(1)}</span>
        </div>
      </div>
      <button onClick={onClose} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,color:"rgba(255,255,255,.3)",fontSize:15,cursor:"pointer",padding:"2px 6px",lineHeight:1,outline:"none",flexShrink:0}}>×</button>
    </div>
  );
}

/* Swarm bar */
function SwarmBar({ active, onSelect }) {
  const isC = active === "comp";
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:"100%"}}>
      <button onClick={()=>onSelect("comp")} style={{
        padding:"9px 28px",borderRadius:14,
        background:isC?"linear-gradient(135deg,rgba(255,45,115,.38),rgba(200,30,100,.28))":"rgba(255,255,255,.025)",
        border:isC?"2px solid rgba(255,80,150,.55)":"1.5px solid rgba(255,255,255,.06)",
        color:isC?"#fff":"rgba(255,255,255,.45)",fontFamily:"'JetBrains Mono',monospace",fontWeight:800,fontSize:14,
        cursor:"pointer",transition:"all .3s",boxShadow:isC?"0 0 22px rgba(255,50,120,.22)":"none",outline:"none",
        display:"flex",alignItems:"center",gap:8,
      }}
        onMouseEnter={e=>{if(!isC){e.currentTarget.style.background="rgba(255,255,255,.05)";e.currentTarget.style.color="#fff";}}}
        onMouseLeave={e=>{if(!isC){e.currentTarget.style.background="rgba(255,255,255,.025)";e.currentTarget.style.color="rgba(255,255,255,.45)";}}}
      >
        <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:6,background:isC?"rgba(255,60,130,.28)":"rgba(255,255,255,.05)",fontWeight:900,fontSize:11}}>Qq</span>
        QQ Score
      </button>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,flexWrap:"wrap"}}>
        {DIMS.map(d=>{
          const isA=active===d.key;
          return(
            <button key={d.key} onClick={()=>onSelect(d.key)} style={{
              padding:"6px 12px",borderRadius:9,
              background:isA?`linear-gradient(135deg,${d.color}28,${d.color}18)`:`linear-gradient(135deg,${d.color}0c,${d.color}06)`,
              border:isA?`1.5px solid ${d.color}55`:`1px solid ${d.color}20`,
              color:isA?d.color:`${d.color}99`,fontFamily:"'JetBrains Mono',monospace",fontWeight:isA?700:600,fontSize:10,
              cursor:"pointer",transition:"all .3s",boxShadow:isA?`0 0 14px ${d.color}22`:`0 0 6px ${d.color}08`,outline:"none",
              display:"flex",alignItems:"center",gap:5,
            }}
              onMouseEnter={e=>{if(!isA){e.currentTarget.style.color=d.color;e.currentTarget.style.boxShadow=`0 0 12px ${d.color}18`;}}}
              onMouseLeave={e=>{if(!isA){e.currentTarget.style.color=`${d.color}99`;e.currentTarget.style.boxShadow=`0 0 6px ${d.color}08`;}}}
            >
              <span style={{width:6,height:6,borderRadius:"50%",background:d.color,opacity:isA?1:.5,boxShadow:`0 0 5px ${d.color}40`}}/>
              {d.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════ MAIN ════════════════ */

export default function QQHexSphere() {
  const [sortKey, setSortKey] = useState("comp");
  const [selected, setSelected] = useState(null);
  const [rot, setRot] = useState({ x: -0.25, y: 0 });
  const dragRef = useRef({ active: false, lx: 0, ly: 0, moved: false });

  const handleSort = useCallback(k => { setSortKey(k); setSelected(null); }, []);
  const ranked = useMemo(() => rankAll(sortKey), [sortKey]);
  const sphere = useMemo(() => fibSphere(TOTAL), []);

  const onDown = useCallback(e => {
    dragRef.current = { active: true, lx: e.clientX, ly: e.clientY, moved: false };
  }, []);
  const onMove = useCallback(e => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.lx, dy = e.clientY - d.ly;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) d.moved = true;
    d.lx = e.clientX; d.ly = e.clientY;
    setRot(r => ({ x: r.x - dy * 0.006, y: r.y + dx * 0.006 }));
  }, []);
  const onUp = useCallback(() => {
    dragRef.current.active = false;
  }, []);

  /*
    The sphere radius and hex size are tuned so that hexagons
    on the surface TOUCH each other — like a geodesic ball.

    Angular separation between fibonacci neighbors ≈ sqrt(4π/N).
    Hex "radius" on screen = sphereR * angularSep / 2.
  */
  const sphereR = 220;
  const angularSep = Math.sqrt((4 * Math.PI) / TOTAL);
  const hexR = sphereR * angularSep * 0.56; // tight packing
  const cx = 400, cy = 340;

  // Project, depth-sort
  const proj = useMemo(() => {
    return sphere.map((sp, i) => {
      const rp = rotate3D(sp, rot.x, rot.y);
      return { ...rp, idx: i };
    }).sort((a, b) => a.z - b.z);
  }, [sphere, rot]);

  const hexD = useMemo(() => hexPath(hexR), [hexR]);
  const sel = selected !== null ? ranked[selected] : null;

  return (
    <div style={{
      width:"100%",minHeight:"clamp(560px, 74vw, 720px)",
      background:"radial-gradient(ellipse at 50% 50%,#1a0915 0%,#0a0508 48%,#040204 100%)",
      display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",
      fontFamily:"'Outfit',sans-serif",position:"relative",userSelect:"none",
      border:"1px solid rgba(255,255,255,.07)",borderRadius:20,isolation:"isolate",
    }} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        @keyframes coreG{0%,100%{opacity:.1;transform:translate(-50%,-50%) scale(1)}50%{opacity:.2;transform:translate(-50%,-50%) scale(1.05)}}
      `}</style>

      {/* Grain */}
      <div style={{position:"absolute",inset:0,background:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,pointerEvents:"none",zIndex:0}}/>
      {/* Core glow */}
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:sphereR*2.6,height:sphereR*2.6,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,40,110,.16) 0%,rgba(255,40,110,.02) 50%,transparent 70%)",animation:"coreG 6s ease-in-out infinite",pointerEvents:"none",zIndex:0}}/>

      <div style={{
        width:"100%",maxWidth:900,minHeight:"inherit",padding:"22px 14px 12px",
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
        position:"relative",zIndex:2,boxSizing:"border-box",
      }}>
        <div style={{
          marginBottom:10,padding:"4px 9px",borderRadius:999,
          border:"1px solid rgba(255,77,148,.22)",background:"rgba(255,77,148,.08)",
          color:"rgba(255,255,255,.58)",fontFamily:"'JetBrains Mono',monospace",
          fontSize:8.5,fontWeight:700,letterSpacing:.5,textTransform:"uppercase",
        }}>
          Illustrative product demo
        </div>
        <SwarmBar active={sortKey} onSelect={handleSort} />
        <div style={{
          marginTop:8,fontFamily:"'JetBrains Mono',monospace",fontSize:9,
          color:"rgba(255,255,255,.28)",letterSpacing:0.2,textAlign:"center",
        }}>
          Select a dimension to re-rank · drag to rotate · select an asset for details
        </div>

      {/* SVG Sphere */}
      <svg
        viewBox={`0 0 800 680`}
        role="img"
        aria-label="Interactive QQ Omega crypto asset ranking sphere"
        style={{width:"100%",maxWidth:800,height:"auto",cursor:"grab",touchAction:"none"}}
        onPointerDown={onDown}
      >
        <defs>
          <filter id="hexGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="sphereShadow" cx="50%" cy="55%" r="40%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
            <stop offset="80%" stopColor="rgba(0,0,0,0)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,.4)"/>
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={sphereR + hexR * 0.3} fill="none" stroke="rgba(255,100,170,.04)" strokeWidth="1"/>
        <circle cx={cx} cy={cy} r={sphereR + hexR * 0.3} fill="url(#sphereShadow)" opacity=".3"/>

        {proj.map(p => {
          const data = ranked[p.idx];
          const { h, s, l } = getHexColor(data.rank);
          const depth01 = (p.z + 1) / 2;
          const opacity = 0.15 + depth01 * 0.85;
          const lightBoost = depth01 * 18;
          const fillL = l - 10 + lightBoost;
          const fillA = 0.2 + depth01 * 0.75;
          const fill = `hsla(${h},${s}%,${fillL}%,${fillA})`;
          const strokeA = 0.08 + depth01 * 0.25;
          const stroke = `hsla(${h},${s-10}%,${fillL+15}%,${strokeA})`;
          const sx = cx + p.x * sphereR;
          const sy = cy + p.y * sphereR;
          const isSel = selected === p.idx;
          const shadow = depth01 > 0.4 ? "0 1px 2px rgba(0,0,0,.6)" : "none";
          const vis = depth01 > 0.18;
          const visTicker = depth01 > 0.12;

          // Periodic table font sizing
          const scoreFs = Math.max(5.5, hexR * 0.32);  // prominent top
          const tickerFs = Math.max(6, hexR * 0.42);   // big center
          const rankFs = Math.max(3.5, hexR * 0.18);   // small bottom

          return (
            <g key={`${sortKey}-${data.s}`} data-h="1"
              transform={`translate(${sx.toFixed(1)},${sy.toFixed(1)})`}
              style={{ cursor:"pointer", opacity, transition:"opacity .15s" }}
              onClick={() => { if (!dragRef.current.moved) setSelected(selected === p.idx ? null : p.idx); }}
              onMouseEnter={e => { e.currentTarget.style.opacity="1"; e.currentTarget.querySelector('.hexFill').setAttribute('filter','url(#hexGlow)'); }}
              onMouseLeave={e => { e.currentTarget.style.opacity=String(opacity); e.currentTarget.querySelector('.hexFill').removeAttribute('filter'); }}
            >
              <path className="hexFill" d={hexD}
                fill={isSel ? `hsla(${h},${s+10}%,${fillL+8}%,${Math.min(1,fillA+.2)})` : fill}
                stroke={isSel ? "#fff" : stroke}
                strokeWidth={isSel ? 1.5 : 0.7}
                strokeLinejoin="round"
                filter={isSel ? "url(#hexGlow)" : undefined}
              />
              {/* Score — top, prominent (like atomic number) */}
              {vis && (
                <text x="0" y={-hexR*0.3} textAnchor="middle" dominantBaseline="central"
                  fill="white" fontFamily="'JetBrains Mono',monospace" fontWeight="800"
                  fontSize={scoreFs} style={{textShadow:"0 1px 3px rgba(0,0,0,.7),0 0 6px rgba(0,0,0,.4)"}} opacity={0.5+depth01*0.5}>
                  {data.qq}
                </text>
              )}
              {/* Ticker — center, big (like element symbol) */}
              {visTicker && (
                <text x="0" y={hexR*0.02} textAnchor="middle" dominantBaseline="central"
                  fill="white" fontFamily="'JetBrains Mono',monospace" fontWeight="800"
                  fontSize={tickerFs} letterSpacing="-0.5" style={{textShadow:shadow}} opacity={0.3+depth01*0.7}>
                  {data.s}
                </text>
              )}
              {/* Rank — bottom, small (like atomic mass) */}
              {vis && (
                <text x="0" y={hexR*0.35} textAnchor="middle" dominantBaseline="central"
                  fill="white" fontFamily="'JetBrains Mono',monospace" fontWeight="500"
                  fontSize={rankFs} style={{textShadow:shadow}} opacity={0.25+depth01*0.4}>
                  #{data.rank}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {sel && <Detail data={sel} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}
