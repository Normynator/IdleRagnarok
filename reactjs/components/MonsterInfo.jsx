import React from "react";
import {Label, Table, Thumbnail} from "react-bootstrap";
import PopoverHoverFocusBottom from "./PopoverHoverFocusBottom"

export default class MonsterInfo extends React.Component {
    render() {
        let mID = this.props.monsterID
        let mobj = this.props.mobj
        let items = [];
        for (var key in mobj.items) {
            console.log(mobj.items[key])
            items.push(<PopoverHoverFocusBottom key={key.toString()} src={"/static/images/dungeon/ice_cave/"+mID+"/"+key.toString()+".gif"} title={mobj.items[key].title} msg={mobj.items[key].msg}/>);
        }
        // API REQUEST TO GET MONSTER INFO
        return (
            <Thumbnail src={"/static/images/dungeon/ice_cave/"+mID+".gif"} style={{ width: 250, height: 450 }}>
                <h3>{mobj.name}</h3>
                <hr/>
                <p>
                    <Table striped bordered condensed hover>
                        <tbody>
                            <tr>
                                <td><Label>Damage:</Label> 2000</td>
                            </tr>
                            <tr>
                                <td><Label>Health:</Label> 20135</td>
                            </tr>
                            <tr>
                                <td><Label>DEF:</Label> 89</td>
                            </tr>
                            <tr>
                                <td><Label>MDEF:</Label> 20</td>
                            </tr>
                            <tr>
                                <td><Label>Buffs:</Label> Blessing, Agi</td>
                            </tr>
                        </tbody>
                    </Table>
                </p>
                {items}
            </Thumbnail>
        )
    }
}