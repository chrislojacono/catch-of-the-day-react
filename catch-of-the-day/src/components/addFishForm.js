import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (e) => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish)
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name"></input>
                <input name="price" ref={this.priceRef} type="text" placeholder="price"></input>
                <select name="status" ref={this.statusRef} placeholder="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description" ref={this.descRef} type="text" placeholder="description"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="image"></input>
                <button type="submit">Add Fish</button>
            </form>

        )
    }
}

export default AddFishForm;