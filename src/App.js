import { Routes, Route, HashRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Blog } from './pages/Blog';
import About from './pages/About';
import I2C from './pages/TechnicalBlog/I2C'
import SPI from './pages/TechnicalBlog/SPI'
import UART from './pages/TechnicalBlog/UART'
import SyncAsync from './pages/TechnicalBlog/SyncAsync'
import Canbus from './pages/TechnicalBlog/Canbus'
import SensorFusion from './pages/TechnicalBlog/SensorFusion'
import RTOS from './pages/TechnicalBlog/RTOS'
import ECE1A from './pages/SchoolBlog/ECE1A'
import Highschool from './pages/SchoolBlog/Highschool'

import './PageTransitions.css';

function App() {
  return (
    <div className="bg-slate-900">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition key="home" timeout={1000} classNames="fade">
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/About"
            element={
              <TransitionGroup>
                <CSSTransition key="about" timeout={1000} classNames="fade">
                  <About />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Resume"
            element={
              <TransitionGroup>
                <CSSTransition key="resume" timeout={1000} classNames="fade">
                  <Resume />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog"
            element={
              <TransitionGroup>
                <CSSTransition key="blog" timeout={1000} classNames="fade">
                  <Blog />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/I2C"
            element={
              <TransitionGroup>
                <CSSTransition key="i2c" timeout={1000} classNames="fade">
                  <I2C />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/SPI"
            element={
              <TransitionGroup>
                <CSSTransition key="spi" timeout={1000} classNames="fade">
                  <SPI />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/UART"
            element={
              <TransitionGroup>
                <CSSTransition key="uart" timeout={1000} classNames="fade">
                  <UART />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/SyncAsync"
            element={
              <TransitionGroup>
                <CSSTransition key="syncasync" timeout={1000} classNames="fade">
                  <SyncAsync />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/CAN-bus"
            element={
              <TransitionGroup>
                <CSSTransition key="canbus" timeout={1000} classNames="fade">
                  <Canbus />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/Sensor-Fusion"
            element={
              <TransitionGroup>
                <CSSTransition key="sensorfusion" timeout={1000} classNames="fade">
                  <SensorFusion />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/RTOS"
            element={
              <TransitionGroup>
                <CSSTransition key="rtos" timeout={1000} classNames="fade">
                  <RTOS />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/ECE1A"
            element={
              <TransitionGroup>
                <CSSTransition key="ece1a" timeout={1000} classNames="fade">
                  <ECE1A />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Blog/Highschool"
            element={
              <TransitionGroup>
                <CSSTransition key="highschool" timeout={1000} classNames="fade">
                  <Highschool />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
