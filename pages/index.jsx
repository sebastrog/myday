import { useState } from 'react'
import HeadPages from '../components/Head'

const Home = () => {

	const [showLogSignToggle, setShowLogSignToggle] = useState(false)

  return <>
		<HeadPages title="Daynalist" description="Log In"/>

		<section className="h-full  md:h-screen">
			<div className="container py-12 px-6 h-full m-auto">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-4/5 xl:w-2/3">
						<div className="block shadow-lg">
							<div className="lg:flex lg:flex-wrap g-0">
								<div 
									className="lg:w-6/12 py-4 md:py-0 px-4 md:px-0 rounded-tr lg:rounded-tr-none rounded-tl lg:rounded-bl" 
									style={{ background: "linear-gradient(to left, #ffffff, #f5efef)" }}>
									<div className="md:p-12 md:mx-6">
										<div className="text-center">
											<h1 className="text-xl font-semibold">Daynalist</h1>
											<h4 className="text-lg mb-12"> <small>by</small> FreetoTeam</h4>
										</div>

										<form>
											<p className="mb-4">Please {showLogSignToggle ? "sign up" : "login"} to your account</p>
											<div className="mb-4">
												<input
													type="text"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													placeholder="Email"
												/>
											</div>
											<div className="mb-4">
												<input
													type="password"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													placeholder="Password"
												/>
											</div>
											<div className="text-center pt-1 mb-12 pb-1">
												<button
													className="rounded inline-block px-6 py-2.5 text-white font-medium text-xs uppercase shadow-md bgSecondary w-full mb-3"
													type="button"
												>
													{showLogSignToggle ? "sign up" : "login" }
												</button>
												<a className="text-gray-500" href="#!">Forgot password?</a>
											</div>
											<div className="flex items-center justify-between pb-6">
												<p className="mb-0 mr-2">{showLogSignToggle ? "Do you have an account?" : "Don't have an account?"}</p>
												<button
													onClick={e => {e.preventDefault(), setShowLogSignToggle(!showLogSignToggle)}}
													className="inline-block px-2 py-2 border-2 border-gray-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
												>
													{showLogSignToggle ? "login" : "sign up"}
												</button>
											</div>
										</form>
									</div>
								</div>
								<div className="lg:w-6/12 flex items-center bgTertiary rounded-tr-none lg:rounded-tr rounded-br rounded-bl lg:rounded-bl-none" style={{ background: "linear-gradient(to right, #272833, #1c1c27)" }}>
									<div className="text-white px-4 py-6 md:p-12 md:mx-6">
										<h4 className="text-xl font-semibold mb-6">Daynalist is about</h4>
										<p className="text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
}

export default Home
