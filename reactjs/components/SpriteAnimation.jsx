import React from "react";
import Radium from "radium"
import SpriteAnimator from "react-sprite-animator"

let styles = {
  base: {
        width: 150,
        height: 150,
        background: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        color: 'grey',
        padding: '1.5em'
  }
};

@Radium
export default class SpriteAnimation extends React.Component {
    render() {
        let obj = this.props.obj;
        return (
            <div style={styles.base}>
                <SpriteAnimator
                    width={100}
                    height={120}
                    sprite={obj.animation[0]}
                    shouldAnimate={true}
                    fps={obj.animation[1]}
                    startFrame={0}
                    stopLastFrame={false}
                />
            </div>
        )
    }
}