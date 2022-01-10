import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "sample@gmail.com",
      hasEmailError: false,
      content: "お問い合わせ内容",
      hasContactError: false,
    };
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {                      
      emial: inputValue,
      hasEmailError: isEmpty,
    }
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {
      content: inputValue,
      hasContentError: isEmpty,
    }
  }

  render() {
    //未入力の場合　エラー
    let emailErrorText;

    if (this.state.hasEmailError) {
      emailErrorText = (
        <span>
          emailを入力してください
        </span>    
      );
    }

    let contentErrorText;

    if (this.state.hascontentError) {
      contentErrorText = (
        <span>
          お問い合わせ内容を入力してください
        </span>
      );
    } 

    let contactForm;

    if (this.state.isSubmitted) {
      contactForm = (
        <span className = "message" style={{
            paddingLeft: "15px"
        }}>送信完了しました</span>
      );//ここ分岐
    } else {
      contactForm = (
        <form onSubmit={()=>{this.handleSubmit()}}>
          <p>メールアドレス（必須)</p>
          <textarea
            value = {this.state.email}
            onChange={(event)=>{this.handleEmailChange(event)}}
            rows = {"1"}
          />
          {emailErrorText}
          <p>お問い合わせ（必須)</p>
          <textarea 
            value = {this.state.content}
            onChange={(event)=>this.handleContenttChange(event)}
            rows = {"4"}
          />
          {this.contentErrortext}
          <Button type="submit" 
                variant="contained" 
                endIcon={<SendIcon />}
                size="small"
                color="info">{"送信"}</Button>
        </form>
      );
    }

    return(
      <div className = "container">
        {contactForm}
     </div>
    );
  }

}

export default ContactForm;