import React, {Component} from 'react';
import PropTypes from 'prop-types';

function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../../../public/images/', true, /\.svg$/));

class IconSvg extends Component {

    constructor(props){
        super(props);
        this.svgId = props.uniqueId;
        this.stylesForSvg = `<style>#${this.svgId} * { fill: ${props.color}; }</style>`;
        this.stylesForHoverSvg = props.hoverColor ? `<style>#${this.svgId}:hover * { fill: ${props.hoverColor}; }</style>` : '';
        this.xLink = `${this.stylesForSvg}${this.stylesForHoverSvg}<use id="${this.svgId}" xlink:href="#${props.name}" />`;
    }

    render() {
        return (
            <svg className="icon" id={this.svgId} dangerouslySetInnerHTML={{__html: this.xLink }}>
            </svg>
        )
    }
}

IconSvg.propTypes = {
    name: PropTypes.string,
    uniqueId: PropTypes.string,
    hoverColor: PropTypes.string,
    color: PropTypes.string
};

export default IconSvg;