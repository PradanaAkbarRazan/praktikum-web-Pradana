"use client"
import React, { useState } from "react"

export default function Home() {
  const weapons = [
    { id: 'mp5', name: 'MP5', ammo: '30/120', icon: '🔫', color: '#ff4d6d' },
    { id: 'sniper', name: 'Sniper', ammo: '5/25', icon: '🎯', color: '#ffd166' },
    { id: 'pistol', name: 'Pistol', ammo: '12/60', icon: '🔫', color: '#9ad3bc' }
  ]

  const maps = [
    { id: 'downtown', name: 'Downtown', points: [{l:'60%', t:'30%'}, {l:'25%', t:'70%'}] },
    { id: 'harbor', name: 'Harbor', points: [{l:'40%', t:'50%'}, {l:'80%', t:'20%'}] },
    { id: 'vinewood', name: 'Vinewood', points: [{l:'20%', t:'20%'}, {l:'60%', t:'60%'}] }
  ]

  const [showWeapons, setShowWeapons] = useState(false)
  const [showMaps, setShowMaps] = useState(false)
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0])
  const [selectedMap, setSelectedMap] = useState(maps[0])

  return (
    <main style={styles.page}>
      <div style={styles.hud}>
        <div style={styles.hero}>
          <div style={styles.gtaLogo}>HIT MISSION</div>
          <div style={styles.vice}>Neon Ops</div>
          <div style={styles.account}>Player: Pradana 105224005</div>
          <svg style={styles.palms} viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
            <g fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="1">
              <path d="M10 50 C 30 20, 40 10, 60 20 C 80 30, 90 40, 110 30 C 130 20, 140 10, 160 25" fill="rgba(0,0,0,0.45)" />
            </g>
            <g transform="translate(20,8) scale(0.8)" fill="#0b0b0b">
              <path d="M18 34c-1-6 4-14 8-16 6-3 10 6 12 12 3 9-9 15-20 13z" />
              <path d="M30 22c2-4 8-9 12-8 6 1 6 10 4 15-2 6-14 8-18 1z" />
            </g>
            <g transform="translate(110,6) scale(0.9)" fill="#0b0b0b">
              <path d="M18 34c-1-6 4-14 8-16 6-3 10 6 12 12 3 9-9 15-20 13z" />
              <path d="M30 22c2-4 8-9 12-8 6 1 6 10 4 15-2 6-14 8-18 1z" />
            </g>
          </svg>
        </div>

        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div style={styles.row}>
            <div style={styles.stat}>
              <div style={styles.statLabel}>$</div>
              <div style={styles.statValue}>1,249,875</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statLabel}>WANTED</div>
              <div style={styles.wantedStars}>★★★</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statLabel}>ARMOR</div>
              <div style={styles.barWrap}><div style={{...styles.bar, width: '72%'}} /></div>
            </div>
          </div>

          <div style={{display:'flex', gap:8}}>
            <button style={{...styles.btn, ...styles.ghost}} onClick={()=>{setShowWeapons(v=>!v); setShowMaps(false)}}>Weapons</button>
            <button style={{...styles.btn, ...styles.ghost}} onClick={()=>{setShowMaps(v=>!v); setShowWeapons(false)}}>Maps</button>
          </div>
        </div>
      </div>

      <div style={styles.centerCard}>
        <div style={styles.cardTitle}>MISSION: NIGHT RUN</div>
        <p style={styles.cardText}>
          You and your crew need to get the package across town. Avoid the cops, hit the gas,
          and don't forget to pick up the tech from the docks.
        </p>
        <div style={styles.controls}>
          <button style={{...styles.btn, ...styles.ghost}}>BRIEF</button>
          <button style={{...styles.btn, ...styles.primary}}>START MISSION</button>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.leftInfo}>
          <div style={styles.small}>RADIO: FM 98.7 - SYNTHWAVE</div>
        </div>
        <div style={styles.rightInfo}>
          <div style={styles.small}>FPS: 60</div>
        </div>
      </div>

      {/* Mini-map and weapon HUD overlays */}
      <div style={styles.minimap}>
        <div style={styles.mapInner}>
          <div style={styles.playerDot} />
          {selectedMap.points.map((p, i)=> (
            <div key={i} style={{...styles.point, left: p.l, top: p.t}} />
          ))}
        </div>
        <div style={styles.mapLabel}>{selectedMap.name}</div>
      </div>

      <div style={styles.weaponHud} onClick={()=>setShowWeapons(v=>!v)}>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <div>
            <div style={styles.weaponName}>{selectedWeapon.name}</div>
            <div style={styles.ammo}>{selectedWeapon.ammo}</div>
          </div>
          <div style={styles.weaponIcon}>{selectedWeapon.icon}</div>
        </div>
      </div>

      <div style={styles.leftBottomCluster}>
        <div style={styles.healthWrap}>
          <div style={styles.healthLabel}>HEALTH</div>
          <div style={styles.healthBar}><div style={{...styles.healthFill, width: '64%'}} /></div>
        </div>
        <div style={styles.staminaWrap}>
          <div style={styles.healthLabel}>STAMINA</div>
          <div style={styles.healthBar}><div style={{...styles.healthFill, width: '88%', background: rgb(120,200,255)}} /></div>
        </div>
      </div>

      {/* Weapon panel */}
      {showWeapons && (
        <div style={styles.weaponPanel}>
          <div style={styles.panelTitle}>Weapons</div>
          <div style={styles.thumbGrid}>
            {weapons.map(w=> (
              <div key={w.id} style={styles.thumb} onClick={()=>{setSelectedWeapon(w); setShowWeapons(false)}}>
                <div style={{...styles.thumbImg, background: w.color}}>{w.icon}</div>
                <div style={styles.thumbLabel}>{w.name}</div>
                <div style={styles.thumbSub}>{w.ammo}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Map panel */}
      {showMaps && (
        <div style={styles.mapPanel}>
          <div style={styles.panelTitle}>Maps</div>
          <div style={styles.thumbGrid}>
            {maps.map(m=> (
              <div key={m.id} style={styles.thumb} onClick={()=>{setSelectedMap(m); setShowMaps(false)}}>
                <div style={{...styles.mapThumb}}>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100" height="100" fill="#111" />
                    <circle cx="${30}" cy="${30}" r="6" fill="#ff4d6d" />
                    <circle cx="${70}" cy="${60}" r="4" fill="#78ffb2" />
                  </svg>
                </div>
                <div style={styles.thumbLabel}>{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`@font-face{font-family:GTA;src:local('GTA'), local('Pricedown');}
      body{margin:0}
      `}</style>
    </main>
  )
}

const rgb = (r:number,g:number,b:number)=>`rgb(${r}, ${g}, ${b})`

const styles: {[k:string]: React.CSSProperties} = {
  page: {
    height: '100vh',
    background: `linear-gradient(180deg, ${rgb(10,10,20)} 0%, ${rgb(35,20,40)} 60%)`,
    color: 'white',
    fontFamily: 'GTA, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '28px'
  },
  hud: {
    width: '100%',
    maxWidth: 1100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 42,
    letterSpacing: 2,
    color: rgb(255,200,10),
    textShadow: '0 6px 20px rgba(255,20,150,0.14)',
    fontWeight: 900
  },
  hero: {display:'flex', flexDirection:'column', gap:6},
  gtaLogo: {fontFamily:'GTA, Impact, Arial Black, sans-serif', fontSize:28, color:'#ffffff', textTransform:'uppercase', letterSpacing:2, padding:'6px 12px', background:'linear-gradient(90deg,#1a0b2e,#2a083a)', borderRadius:8, boxShadow:'0 12px 60px rgba(255,20,150,0.06)'},
  vice: {fontFamily:'GTA, "Brush Script MT", cursive, sans-serif', fontSize:34, color:'#ff78f0', textShadow:'0 6px 30px rgba(255,85,200,0.22)', fontWeight:900},
  account: {fontSize:13, color:'rgba(255,255,255,0.8)', marginTop:6, background:'rgba(255,255,255,0.02)', padding:'6px 8px', borderRadius:6, alignSelf:'flex-start'},
  palms: {width:220, height:60, opacity:0.85},
  row: {display:'flex', gap:18, alignItems:'center'},
  stat: {background:'rgba(0,0,0,0.25)', padding:'10px 14px', borderRadius:8, minWidth:120, textAlign:'center'},
  statLabel: {fontSize:10, color:'rgba(255,255,255,0.7)', letterSpacing:1},
  statValue: {fontSize:16, fontWeight:700, marginTop:6, color:rgb(180,255,120)},
  wantedStars: {fontSize:18, color:rgb(255,40,40)},
  barWrap: {background:'rgba(255,255,255,0.08)', height:10, borderRadius:6, marginTop:8, overflow:'hidden'},
  bar: {height:10, background: `linear-gradient(90deg, ${rgb(255,50,80)}, ${rgb(255,200,40)})`},
  centerCard: {background:'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))', padding:28, borderRadius:12, width:'min(920px, 96%)', boxShadow:'0 20px 60px rgba(0,0,0,0.6)', marginTop:40, textAlign:'left'},
  cardTitle: {fontSize:32, color:rgb(255,220,60), fontWeight:900, letterSpacing:2, textShadow:'0 2px 0 rgba(0,0,0,0.6)'},
  cardText: {color:'rgba(255,255,255,0.85)', marginTop:12, lineHeight:1.4},
  controls: {display:'flex', gap:12, marginTop:18},
  btn: {padding:'12px 18px', borderRadius:8, fontWeight:800, letterSpacing:1, cursor:'pointer', border:'none'},
  ghost: {background:'transparent', color:'white', border:'1px solid rgba(255,255,255,0.12)'},
  primary: {background:rgb(255,60,100), color:'white', boxShadow:'0 8px 30px rgba(255,60,100,0.18)'},
  bottomBar: {width:'100%', maxWidth:1100, display:'flex', justifyContent:'space-between', padding:'10px 12px', marginBottom:6, opacity:0.95},
  leftInfo: {},
  rightInfo: {},
  small: {fontSize:12, color:'rgba(255,255,255,0.7)'}
}

// overlays
styles.minimap = {
  position: 'fixed',
  right: 28,
  bottom: 92,
  width: 160,
  height: 160,
  borderRadius: 10,
  background: 'rgba(0,0,0,0.55)',
  border: '2px solid rgba(255,255,255,0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8
}

styles.mapInner = {position:'relative', width:'100%', height:'100%', borderRadius:8, overflow:'hidden', background:'linear-gradient(180deg,#0b0b10,#2a1b2a)'}
styles.playerDot = {position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', width:10, height:10, borderRadius:6, background:rgb(255,40,40), boxShadow:'0 0 8px rgba(255,40,40,0.7)'}
styles.point = {position:'absolute', width:8, height:8, borderRadius:6, background:rgb(120,255,160), boxShadow:'0 0 8px rgba(120,255,160,0.6)'}
styles.mapLabel = {position:'absolute', bottom:6, left:8, fontSize:11, color:'rgba(255,255,255,0.8)'}

styles.weaponHud = {position:'fixed', right:28, bottom:270, width:140, height:70, background:'rgba(0,0,0,0.6)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 10px', flexDirection:'column', color:'white'}
styles.weaponName = {fontSize:12, color:rgb(255,210,100), fontWeight:800}
styles.ammo = {fontSize:14, fontWeight:900}
styles.weaponIcon = {fontSize:26}

styles.leftBottomCluster = {position:'fixed', left:28, bottom:60, display:'flex', flexDirection:'column', gap:10}
styles.healthWrap = {width:220}
styles.staminaWrap = {width:220}
styles.healthLabel = {fontSize:12, color:'rgba(255,255,255,0.85)', marginBottom:6}
styles.healthBar = {width:'100%', height:12, background:'rgba(255,255,255,0.06)', borderRadius:8, overflow:'hidden'}
styles.healthFill = {height:'100%', background:`linear-gradient(90deg, ${rgb(30,200,80)}, ${rgb(120,255,120)})`}

// panels
styles.weaponPanel = {position:'fixed', right:200, bottom:80, width:420, maxHeight:380, background:'rgba(0,0,0,0.7)', borderRadius:10, padding:12, overflowY:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.6)'}
styles.mapPanel = {position:'fixed', right:200, bottom:80, width:420, maxHeight:380, background:'rgba(0,0,0,0.7)', borderRadius:10, padding:12, overflowY:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.6)'}
styles.panelTitle = {fontSize:16, fontWeight:900, color:rgb(255,220,60), marginBottom:10}
styles.thumbGrid = {display:'flex', gap:10, flexWrap:'wrap'}
styles.thumb = {width:120, padding:8, borderRadius:8, background:'rgba(255,255,255,0.02)', cursor:'pointer', textAlign:'center'}
styles.thumbImg = {height:74, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28}
styles.thumbLabel = {fontSize:13, marginTop:8, fontWeight:800}
styles.thumbSub = {fontSize:12, color:'rgba(255,255,255,0.7)'}
styles.mapThumb = {height:74, borderRadius:6, overflow:'hidden', background:'#0b0b0b', display:'flex', alignItems:'center', justifyContent:'center'}

// Vice City neon accents
styles.page.background = `radial-gradient(circle at 10% 10%, ${rgb(60,10,80)} 0%, transparent 25%), linear-gradient(180deg, ${rgb(10,10,30)} 0%, ${rgb(45,5,60)} 60%)`
styles.viceAccent = {position:'absolute', left:0, right:0, top:0, height:220, background:'linear-gradient(180deg, rgba(255,0,150,0.06), transparent)'}



