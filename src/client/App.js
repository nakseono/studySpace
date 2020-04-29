import React, { Component } from 'react';
import './app.css';
import Modal from 'react-modal'
import ReactHtmlParser from 'react-html-parser';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
export default class App extends Component {
  state = {
    nowEditing: false,
    nowSaving: false,
    currentItem: {
      id: null,
      body: null,
      status: null
    },
    modalIsOpen : false
  };

  componentDidMount() {
    fetch('/api/source')
      .then(res => res.text())
      .then((t) => {
        this.setState({ sources: t });
      });
  }

  handleClickSaveSource() {
    // this.toggleMode();
    fetch('/api/source',
      {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'text/plain'
        },
        body: this.state.sources
      });
  }

  handleClickItem(i) {
    fetch(`/api/data/${i}`)
      .then(res => res.json())
      .then((json) => {
        this.setState(prevState => ({
          currentItem: {
            ...prevState.currentItem,
            ...json
          }
        }));
      });
  }

  handleClickSaveItem() {
    this.setState({ nowSaving: true });

    fetch(`/api/data/${this.state.currentItem.id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'text/plain'
        }
      })
      .then(res => res.text())
      .then((text) => {
        if (text === 'ok') {
          this.setState({ nowSaving: false });
          this.handleClickItem(this.state.currentItem.id);
        }
      });
  }

  handleChangeValue(e) {
    this.setState({ sources: e.target.value });
  }

  handleClickCancel() {
    this.setState({
      currentItem: {
        id: null,
        body: null,
        status: null
      }
    });
  }
  openModal() {
    this.setState({modalIsOpen : true})
  }
  closeModal() {
    this.setState({modalIsOpen : false})
  }

  toggleMode() {
    this.setState(prevState => ({ nowEditing: !prevState.nowEditing }));
  }

  render() {
    const { sources } = this.state;
    let lis = '';

    if (sources) {
      lis = sources.split('\n').map((line, i) => (
        <li className={this.state.currentItem.id === String(i) ? 'active' : ''} key={i}>
          <a onClick={this.handleClickItem.bind(this, i)}>{decodeURIComponent(line)}</a>
        </li>));
    }

    return (
      <div>
        <h3>article collector (for medium blog)</h3>
        <div className={this.state.nowEditing ? 'hidden' : ''}>
          <header>
            <button onClick={this.openModal.bind(this)}>입력</button>
          </header>
          <ul>
            {lis}
          </ul>
          {ReactHtmlParser(`<code id="content" className=${this.state.currentItem.status === 'nonexist' ? 'hidden' : ''}>${this.state.currentItem.body}</code>`)}
          <div id="modal" className={this.state.currentItem.status === 'nonexist' ? '' : 'hidden'}>
            <div className="modal-content">
              <p>아직 수집되지 않았습니다. 수집 후 파일로 저장하시겠습니까?</p>
              <button disabled={this.state.nowSaving} onClick={this.handleClickSaveItem.bind(this)}>
                수집 후 저장
              </button>
              <button disabled={this.state.nowSaving} onClick={this.handleClickCancel.bind(this)}>
                취소
              </button>
              <span className={this.state.nowSaving ? '' : 'hidden'}>저장 중...</span>
            </div>
          </div>
        </div>

          <Modal isOpen={this.state.modalIsOpen} style = {customStyles}>
            <h2>dfdfdfd</h2>
            <button onClick={this.closeModal.bind(this)}>close</button>
            <button onClick={this.handleClickSaveSource.bind(this)}>저장</button>
          <textarea value={sources} onChange={this.handleChangeValue.bind(this)} />
          </Modal>
      </div>
    );
  }
}
