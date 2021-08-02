import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
import { withRouter,useHistory } from 'react-router-dom'

const LoginForm = (props) => {
// Context
const { loginUser,loadUser } = useContext(AuthContext)
const history = useHistory()

// Local state
const [loginForm, setLoginForm] = useState({
	username: '',
	password: ''
})

const [alert, setAlert] = useState(null)

const { username, password } = loginForm

const onChangeLoginForm = event =>
	setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

const login = async event => {
	event.preventDefault()

	try {
		const loginData = await loginUser(loginForm)
		if (!loginData.success) {
			setAlert({ type: 'danger', message: loginData.message })
			setTimeout(() => setAlert(null), 5000)

		}
    // history.push('/dashboard')
		window.location.href = '/dashboard';
		
	
		
		
		
	
	
	} catch (error) {
		console.log(error)
	}
	}

	return (
		<>
			<Form className='my-4' onSubmit={login}>
				<AlertMessage info={alert} />

				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
						value={username}
						onChange={onChangeLoginForm}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required
						value={password}
						onChange={onChangeLoginForm}
					/>
				</Form.Group>
				<Button variant='success'  type='submit'>
					Login
				</Button>
			</Form>

				<Link to='/register'>
					<p>Don't have a account? <a href='/register'>Register</a>  </p> 
				</Link>
			
		</>
	)
}

export default  LoginForm
