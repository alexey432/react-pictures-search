import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 }

        // The way to refer to DOM (individual elements) as it's not HTML but JSX
        this.imageRef = React.createRef();
    }
    
    //Show clientHeight only with a callback in EventListener cuz it can't show smth that hasn't been downloaded yet
    componentDidMount() {
        // The way to refer to DOM (individual elements) as it's not HTML but JSX
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans })

    }

    render() {
        const { description, urls } = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* The way to refer to DOM (individual elements) as it's not HTML but JSX */}
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }

}

export default ImageCard;