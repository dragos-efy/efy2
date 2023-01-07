import {$, $all, $root, $add, $append, $insert, $css_prop, $audio_play, efy_audio, $wait, efy} from './efy.js';

(()=>{/*Audio Nature*/ efy_audio.folder = $css_prop('--efy_audio_folder'); let c = 'efy_audio_nature'; $append($('#efy_audio'), $add('details', {id: c, efy_select: ''}, [$add('summary', {efy_lang: 'nature_effects'}, [$add('i', {efy_icon: 'audio'})])]));
let b = $('#efy_audio #efy_audio_nature'); 'forest rain waves underwater people fireworks dreamy'.split(' ').forEach(x => { efy_audio[x] = new Audio(`${efy_audio.folder}/${x}.webm`);
  $append(b, $add('input', {type: 'checkbox', name: c, id: `${c}_${x}`})); $append(b, $add('label', {for: `${c}_${x}`, efy_lang: x}));
  $(`#${c}_${x}`).addEventListener('click', (y=>{ if (y.target.checked == true){ $audio_play(efy_audio[x]); efy_audio[x].loop = true } else {efy_audio[x].pause(); efy_audio[x].currentTime = 0}
}))});


/*3D Layers*/ $append($('.efy_sidebar'), $add('details', {id: 'efy_nature', efy_select: ''}, [$add('summary', {efy_lang: '3d_layers'}, [$add('i', {efy_icon: 'dots'})]), $add('div', {efy_tabs: 'efy_nature'})]));

/*Tabs*/ b = ['front', 'back']; c = $('[efy_tabs=efy_nature]');
b.map(a => $append(c, $add('button', {efy_tab: a, efy_lang: a})));
b.map(a => $append(c, $add('div', {efy_content: a, efy_select: '', id: `efy_${a}`})));
['tab', 'content'].map(a => $(`#efy_nature [efy_${a}='front']`).setAttribute('efy_active', ''));

let d = 'snow rain leaf flower bubble'.split(' '), e = 'snow rain leaves flowers bubbles'.split(' '); b = 'efy_nature_front'; c = $('#efy_nature [efy_content=front]'); d.map((a,i)=>{let d = e[i];
  $append(c, $add('input', {type: 'checkbox', name: b, id: `${b}_${a}`}));
  $append(c, $add('label', {for: `${b}_${a}`, efy_lang: d}));
  $insert($('body'), 'afterbegin', $add('div', {efy_anim: a, 'aria-hidden': 'true'}));
});

$('#efy_nature_front_rain').addEventListener('click', (x)=>{ if (x.target.checked == true){
  for (let i = 0; i < 100; i++){
      $append($('[efy_anim*=rain]'), $add('div', {class: 'efy_anim_child', style: `left: ${Math.floor(Math.random() * window.innerWidth)}px; animation-duration: ${0.2 + Math.random() * 3.9}s; animation-delay: ${Math.random() * 5}s`}));
}} else {$('[efy_anim*=rain]').textContent = ''} })

for (let e = ['snow', 'leaf', 'flower', 'bubble'], ax = ['❅ ❅ ❆ ❄ ❅ ❆ ❄ ❅ ❆ ❄', '🍂 🍁 🍂 🍁 🍂 🍁 🍂 🍁 🍂 🍁', '🌸 🌼 🌸 🌼 🌸 🌼 🌸 🌼 🌸 🌼', '᳃ ⸰ ᪤ ᳃ ⸰ ᪤ ᳃ ⸰ ᪤ ᳃'], j = 0; j < e.length; j++){ let f = $(`[efy_anim*=${e[j]}]`); f.setAttribute('efy_anim', f.getAttribute('efy_anim')+' falling');
  $(`#efy_nature_front_${e[j]}`).addEventListener('click', (x)=>{ if (x.target.checked == true){
    for (let a = ax[j].split(' '), b = '1 10 20 30 40 50 60 70 80 90'.split(' '), c = '0 1 6 4 2 8 6 2.5 1 3'.split(' '), d = '0 1 .5 2 2 3 2 1 0 1.5'.split(' '), i = 0; i < a.length; i++) {
      $append($(`[efy_anim*=${e[j]}]`), $add('div', {class: 'efy_anim_child', style: `left: ${b[i]}%; animation-delay: ${c[i]}s, ${d[i]}s`}, [a[i]]))
}} else {$(`[efy_anim*=${e[j]}]`).textContent = ''} })}


/*Keyboard*/

$append($('#efy_accessibility'), $add('details', {id: 'efy_keyboard', efy_select: ''}, [$add('summary', {efy_lang: 'virtual_keyboard'}), $add('input', {type: 'checkbox', name: 'efy_keyboard', id: 'efy_keyboard_status'}), $add('label', {for: 'efy_keyboard_status', efy_lang: 'active'}) ]));

$insert($('body'), 'afterbegin', $add('div', {efy_keyboard: '', class: 'efy_hide_i'}));

for (let c = `${'`'} 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p [ ] a s d f g h j k l ; ' z x c v b n m , . /`, d = `~ ! @ # $ % ^ & * ( ) _ + Q W E R T Y U I O P { } A S D F G H J K L : | Z X C V B N M < > ?`, a = c.split(' '), b = d.split(' '), i = 0; i < a.length; i++) {
    $append($('[efy_keyboard]'), $add('button', {efy_key: a[i]}, [a[i]]));
    $(`[efy_key="${a[i]}"]`).addEventListener('click', ()=>{ $('input').value += a[i] });

    $append($('[efy_keyboard]'), $add('button', {efy_key: `${b[i]}`, class: 'efy_hide'}, [b[i]]));
    $(`[efy_key="${b[i]}"]`).addEventListener('click', ()=>{ $('input').value += b[i] });
}

d = 'space caps backspace close'.split(' '), e = 'dots star remove remove'.split(' '); d.map((a,i)=>{let b = e[i];
  $append($('[efy_keyboard]'), $add('button', {efy_key: a, class: 'efy_show'}, [$add('i', {efy_icon: b})]))
});

$(`[efy_key="space"]`).addEventListener('click', ()=>{ $('input').value += ' ' });

let backspace =()=>{ let a = $('input').value; $('input').value = a.slice(0, -1) }, intv;

$(`[efy_key="caps"]`).addEventListener('click', ()=>{
    $all('[efy_key]:not(.efy_show)').forEach(a =>{ a.classList.toggle('efy_hide') })
});

c = $(`[efy_key="backspace"]`);
c.addEventListener('click', backspace);
c.addEventListener('pointerdown', ()=>{ intv = setInterval(backspace, 100) });
c.addEventListener('pointerup', ()=> clearInterval(intv) );
c.addEventListener('pointerleave', ()=> clearInterval(intv) );

$all('input:not([type="color"], [type="range"], [type="radio"], [type="checkbox"])').forEach(a =>{ a.addEventListener('focus', ()=>{ $('body').setAttribute('efy_kb', '') })});

$all('[efy_keyboard] [efy_key="close"]').forEach(a =>{ a.addEventListener('click', ()=>{ $('body').removeAttribute('efy_kb')})});

/*Prevent Default*/ $all('[efy_keyboard]').forEach(a => a.addEventListener('contextmenu', ()=> event.preventDefault()));

let a = $('[efy_keyboard]'); b = $('#efy_keyboard_status'); if (efy.keyboard){ b.setAttribute('checked', ''); a.classList.remove('efy_hide_i')}
b.addEventListener('click', (c)=>{ a.classList.toggle('efy_hide_i');
    if (c.target.checked){ efy.keyboard = 'on'} else {delete efy.keyboard} $save();
});



/*Wait*/ $wait(1, ()=>{ /*Alpha*/ ['nature', 'keyboard'].map(a=>{ $insert($(`#efy_${a} > summary`), 'beforeend', $add('mark', {efy_lang: 'alpha'}))})});
})();