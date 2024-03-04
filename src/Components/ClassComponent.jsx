import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Javier'
        }
        console.log('Se creó el constructor')
    }

    componentDidMount(){
        console.log('Se montó el componente')
    }
    componentDidUpdate(){
        console.log('Se actualizó el componente')
    }
    componentWillUnmount(){
        console.log('Se desmontó el componente')
    }

  render() {
    console.log('Se ejecuta el render')
    return (
      <div>
        <h3>Nombre: {this.state.name}</h3>
        <button onClick={() => this.setState({name: 'Camilo'})}> Ese no es mi nombre</button>
      </div>
    )
  }
}
