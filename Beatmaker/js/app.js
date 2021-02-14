class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.currentKick = './sounds/kick-classic.wav';
        this.currentSnare = './sounds/snare-acoustic01.wav';
        this.currentHihat = './sounds/hihat-acoustic01.wav';
        this.kickAudio = document.querySelector('.kick_sound');
        this.snareAudio = document.querySelector('.snare_sound');
        this.hihatAudio = document.querySelector('.hihat_sound');
        this.index = 0;
        this.bpm = 120;
        this.isPlaying = null;
        this.selects = document.querySelectorAll('select');
        this.muteBtns = document.querySelectorAll('.mute');
        this.tempoSlider = document.querySelector('.tempo_slider');
        this.chooseAllButtons = document.querySelectorAll('.choose');
    }

  

    activePad() {
        this.classList.toggle('active');
    }

    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //Loop over the pads
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            //Adding sounds 
            if (bar.classList.contains('active')) {
                if (bar.classList.contains('kick_pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if (bar.classList.contains('snare_pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if (bar.classList.contains('hihat_pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        })
        this.index++;   
    }

    start() {
        const interval = (60/this.bpm) * 1000;
        if (!this.isPlaying) {
            this.isPlaying = setInterval( ()=> {
                this.repeat();
                },interval)
        } else {
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }
    }

    updateBtn() {
        if (!this.isPlaying) {
            this.playBtn.innerText = 'Stop';
            this.playBtn.classList.add('stop');
        } else {
            this.playBtn.innerText = 'Play';
            this.playBtn.classList.remove('stop');
        }
    }
    
    changeSound(e) {
    this.selectionName = e.target.name;
    this.selectionValue = e.target.value;
    switch (this.selectionName) {
        case 'kick_select':
        this.kickAudio.src = this.selectionValue;
        break;
        case 'snare_select':
            this.snareAudio.src = this.selectionValue;
            break;
        case 'hihat_select':
            this.hihatAudio.src = this.selectionValue;
       }
    }

    mute(e) {
        const muteIndex = e.target.getAttribute('data-track');
        e.target.classList.toggle('mute2');
        if (e.target.classList.contains('mute2')) {
            switch (muteIndex) {
                case "0": 
                this.kickAudio.volume = 0;
                break;
                case "1":
                this.snareAudio.volume = 0;
                break;
                case "2":
                this.hihatAudio.volume = 0;
            }
        }  else {
            switch (muteIndex) {
                case "0": 
                this.kickAudio.volume = 1;
                break;
                case "1":
                this.snareAudio.volume = 1;
                break;
                case "2":
                this.hihatAudio.volume = 1;
            }
        }    
    }   

    changeTempo(e) {
        const tempoText = document.querySelector('.tempo_number');
        this.bpm = e.target.value;
        tempoText.innerText = e.target.value;
    }

    updateTempo() {
        clearInterval(this.isPlaying);
        this.isPlaying = null;
        const playBtn = document.querySelector('.play');
        if (playBtn.classList.contains('stop')) {
            this.start();
        }  
    }
    
    selectAll(e) {
        const indicator = e.target.getAttribute('data-track');
        const kickPad = document.querySelectorAll('.kick_pad')
        const snarePad = document.querySelectorAll('.snare_pad')
        const hihatPad = document.querySelectorAll('.hihat_pad')
        switch (indicator) {
            case '0':
            kickPad.forEach(pad => {
                pad.classList.toggle('active');
            })
                break;
            case '1':
                snarePad.forEach(pad => {
                    pad.classList.toggle('active');
                }) 
                break;
            case '2':
                hihatPad.forEach(pad => {
                    pad.classList.toggle('active');
                })  
        }
    };
}

const drumkit = new Drumkit();

//Event listeners

drumkit.pads.forEach(pad => {
    pad.addEventListener('click', drumkit.activePad);
    pad.addEventListener('animationend', function() {
        this.style.animation = "";
    })
    });
    
    
drumkit.playBtn.addEventListener('click', function() {
drumkit.updateBtn()
drumkit.start()
});

drumkit.selects.forEach(select => {
    select.addEventListener('change', function(e){
    drumkit.changeSound(e)
    });
});

drumkit.muteBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
    drumkit.mute(e);
    });
});

drumkit.tempoSlider.addEventListener('input', function(e) {
    drumkit.changeTempo(e);
});

drumkit.tempoSlider.addEventListener('change', function(e) {
    drumkit.updateTempo(e);
});

drumkit.chooseAllButtons.forEach(button => {
button.addEventListener('click', function(e) {
drumkit.selectAll(e);
});
});



