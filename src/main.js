import React from "react";
import ReactDom from "react-dom";

class LikeButton extends React.Component {

  constructor(props) {
    super(props);
    // コンポーネントにカーソルが乗ているかどうかの状態を持たせる
    this.state = {
      hovered: false,
      count: 999,   // カウント数の状態を追加
      liked: false  // 押したかどうかの状態を追加
    }
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        borderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },
      likeHover: {
        background: "#444"
      },
      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },
      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }

  // カーソルが乗った時に状態を変更するイベントハンドラ
  onMouseEnter() {
    this.setState({hovered: true});
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({hovered: false});
  }

  // クリックしたときのイベントハンドラ
  onClick() {
    this.setState({
      count: this.state.count + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  }

  render() {
    const styles = this.styles();
    // 状態に応じてスタイルを変更する
    const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;

    console.log({...styles.like, ...styles.likeHover});

    // this.state.likedとthis.state.countを追加し、
    // onClickイベントハンドラを紐付ける
    return (
      <span style={styles.container}>
        <span
          style={likeStyle}
          onMouseEnter={::this.onMouseEnter}
          onMouseLeave={::this.onMouseLeave}
          onClick={::this.onClick}>{this.state.liked ? "✔ " : ""}いいね！</span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{" "}</span>
          {this.state.count}
        </span>
      </span>
    );
  }
}

ReactDom.render(
  <LikeButton />,
  document.getElementById("like-button")
);
