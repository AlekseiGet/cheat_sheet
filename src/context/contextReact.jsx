import { createContext } from "react";

export const ReactSheet = createContext([
    { title: "запуск реакт приложения на веб странице", text: "npm start", example: "", id: 3000 },
    { title: "Обновить react проект в gitHab", text: "npm run deploy", example: "", id: 3001 },
    { title: "инициализация папки с сервером", text: "npm init -y", example: "в папке появится файл 'package.json'", id: 3002 },
    { title: "Установка фреймворка : express, система управления данными : pg-hstore, ОРМ : segualize, чтобы обращатся к браузеру к серверу : cors dotenv  ", text: "npm install express pg pg-hstore sequelize cors dotenv", example: "после установки все модули можно увидеть в поле 'dependencies'", id: 3003 },
    { title: "Зависимость для разработки 'Дэб зависимость'", text: "npm install -D nodemon ", example: "Нужен для того чтобы при каждом изменении в коде не перезапускать сервер он будет делать это автоматически, смотри дальше " , id: 3004 },
    { title: "Дэб зависимость Установил ? измени script: запускающий приложение в режиме разработки", text: ' "scripts": "dev": "nodemon index.js"  это исполняемая команда', example: "В файле 'package.json' 'test': удалить", id: 3005 },
    { title: "запуск скрипта", text: "npm run dev", example: "Перед этим зайди через консоль в папку с сервером 'cd server'", id: 3006 },
    { title: " pgAdmin 4 - для администрирования и разработки для PostgreSQL и связанных с ней систем управления базами данных", text: "запустил программу pgAdmin 4", example: "пароль 'give_me_your_money'", id: 3007 },
    { title: "создание диаграммы зависимостей", text: "в браузере запустил   https://app.diagrams.net/ и открыл файл 123123", example: " Время в видеоролике : 11мин.13", id: 3008 },
    { title: "Postman - это  приложение, способное выполнять запросы API к любому API HTTP. Он обычно используется для тестирования и изучения API-интерфейсов.", text: "запустил программу Postman", example: " Время в видеоролике :( 25.15 ) ", id: 3009 },
    { title: "Установка модулей на VSC", text: "npm i jsonwebtoken", example: "для генерации токена", id: 3010 },
    { title: "Установка модулей на VSC", text: "npm i bcrypt", example: "для хешиирования паролей и не хранить их в базе данных", id: 3011 },
    { title: "декодировщик токенов", text: " https://jwt.io/", example: "декодировщик токенов", id: 3011 },
    { title: "axios", text: "npm i axios", example: "чтобы отправлять запросы на сервер", id: 3012 },
    { title: "Router", text: "npm i react-router-dom", example: "для постраничной навигации", id: 3013 },
    { title: "ModX", text: "npm i mobx", example: "стейт менеджнр", id: 3014 },
    { title: "Mobx-lite", text: "npm i mobx-react-lite", example: "Для того чтобы связать ModX с функциональными компонентами React", id: 3015 },
    { title: "Bootstrap", text: "npm install react-bootstrap bootstrap", example: "Отвечает за вёрстку", id: 3016 },
    { title: " <Routes> для навигации по приложению", text: <pre>
        {`import {Routes, Route, Navigate} from 'react-router-dom'
          import { authRoutes, publicRoutes } from '../routes';
          ...
                  const isAuth = false //будет показывать авторизован пользователь или нет
          ...        
      <Routes>
          {isAuth && authRoutes.map(({path, Component }) => //проверяю если авторизован == true
             <Route key={path} path={path} element={<Component/> } exact />
          )}
            {publicRoutes.map(({ path, Component }) => 
               <Route key={path} path={path} element={<Component />} exact />
            )}
     </Routes> 
      `}
    </pre> ,
     example: <pre>
        {
 `  routes.js
           //Только для авторизованых пользователей
           export const authRoutes = [
               {path: ADMIN_ROUTE , Component: Admin }, 
               {path: BASKET_ROUTE, Component: Basket}
           ]
         
           //Для всех пользователей
           export const publicRoutes = [
               {path: SHOP_ROUTE, Component: Shop},
               {path: LOGIN_ROUTE, Component: Auth },
               {path: REGISTRATION_ROUTE, Component: Auth},
               {path: DEVICE_ROUTE + '/:id' ,  Component: DevicePage }
             ]
             //ADMIN_ROUTE - ссылка на константу с адресом в отдельном файле export const ADMIN_ROUTE = '/admin'
             //Component: Admin - ссылка на файл страницы в папке page`
        }
     </pre>, id: 3017 },
    { title: "<Navigate ... отработает если ни один из адресов не будет подходить", text: <pre>
        {
           `<Route path='*' element={<Navigate to={SHOP_ROUTE} />} />`
        }
    </pre>, example: <pre>
        {
            `SHOP_ROUTE - ссылка на константу с адресом в отдельном файле export const ADMIN_ROUTE = '/shop'` 
        }
    </pre>, id: 3018 },
    { title: "NavBar из Bootstrap", text: 
        <pre>{`
          import Container from 'react-bootstrap/Container';
          import Nav from 'react-bootstrap/Nav';
          import Navbar from 'react-bootstrap/Navbar';
          import { NavLink } from 'react-router-dom';

           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       `}</pre>, 
      example: <pre>{`
           <Navbar.Brand href="#home">Navbar</Navbar.Brand>  ЗАМЕНИЛ  <NavLink to={SHOP_ROUTE } >Купи девайс</NavLink>
           me-auto НА ml-auto Сдвинется вправо и можно добавить стиль style={{color: 'red'}} 
           `}</pre> , id: 3019 },
    { title: "Кнопки из Bootstrap", text: <pre>{`
        <Button variant={'outline-light '}> Обычная кнопка </Button>
        <CloseButton> Кнопка закрытия - КРЕСТИК </CloseButton>
    `} </pre>, example: <pre>{`
       variant={'outline-light '} -- изменит вид кнопки
       
    `} </pre>, id: 3020 },
    {title: "NavBar С проверкой на авторизацию",
        text: <pre>{`
        import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Link, useLocation } from 'react-router-dom';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
        className="d-flex justify-content-center align-items-center "
        style={{height: window.innerHeight - 54}} >
            <Card style={{width: 600}} className="p-5 " >
                <h2  className='m-auto' >{isLogin ? "Авторизация" : "Регистрация" } </h2>
                <Form className='d-flex flex-column' >
                    <Form.Control
                    className='mt-3'
                    placeholder='введите ваш адресс...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='введите ваш пароль...'
                    />
                    <Form className='d-flex justify-content-between mt-3 pl-3 pr3' >
                        {isLogin ?
                             <div >
                              Нет аккаунта?  <Link to={REGISTRATION_ROUTE} >Зарегестрируйтесь</Link>   
                            </div>
                        :
                            <div >
                             Есть аккаунта?  <Link to={LOGIN_ROUTE} >Войдите</Link>
                            </div>
                        }
                       
                        <Button  variant={"outline-success"} >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Form>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
    `} </pre>, example: <pre>{`
         observer -- Обернуть в него чтобы отслеживал в режиме реального времени и перерисовывал
         isAuth Проверяет на true
         isAuth В файле UserStore
    `} </pre>, id: 3021 },
    {title: "Правки для видео", text: <pre>{`
        Тимур, спасибо!👍
Ремарки к видео (сентябрь 2022), поехали:
(Backend не претерпел изменений, а по frontend изменений хватает)

1:11:05 В index.js вместо:
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
вызываем:
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

1:13:52
Вместо:
import {Switch, Roure, Redirect} from 'react-router-dom'
объявляем:
import {Routes, Roure, Navigate} from 'react-router-dom'
ибо Switch, Redirect упразднены в react-router-dom


1:17:02 - 1:18:58 меняем Switch -> Routes, component -> element
В конструкции:
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
      )}
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} component={Component} exact/>
      )}
    </Switch>
меняем:
1) Switch на Routes
2) component={Component} на element={<Component/>}


1:19:34 Меняем Redirect на Navigate
т.е. строку:
    <Redirect to={SHOP_ROUTE}/>
меняем на 
    <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
или
    <Route path='*' element={<Navigate to='/'/>} />
1й вариант предпочтительнее, т.к. привязан к константе.

1:29:23 Card располагается в react-bootstrap:
import {Container, Form, Card} from 'react-bootstrap'

1:30:54 - 1:31:45 Смена игрового состава: Row -> Form
<Row> отказался работать с указанными свойствами. Его замена на <Form> дает нужный эффект - Текст 'Нет аккаунта?...' и кнопка размещаются на одной строке.

1:37:34 Row -> Form, т.к. Row при className='d-flex' не ставит бренды в линейку

1:40:13 Row -> Form (DeviceList.js)
Здесь оставляем Row, т.к. при Form карточки товаров размещаются в линию, а должны переноситься по 4 шт в линии.

1:44:26 useHistory заменен на useNavigate (DeviceItem.js)
Поэтому вместо:
import { useHistory } from "react-router-dom"
const history = useHistory()
вызываем:
import { useNavigate } from "react-router-dom"
const navigate = useNavigate()
Или можно оставить const history = useNavigate(), если не хотите менять название переменной.

1:45:00 вместо history.push() вызываем navigate()

1:46:21 Row (DevicePage.js)
Меняем на Form, так как Row не воспринимает align-items-center

1:47:54 Row (DevicePage.js) - здесь ОК

1:49:26 Row (DevicePage.js) - здесь ОК

1:49:38 Row (DevicePage.js) - здесь ОК

1:50:43 Тимур щелкнул по КупиДевайс и перешел на главную страницу... а я нет.
В NavBar.js есть тег Navlink, у которого наименование атрибута - to - надо заменить на href

1:50:57 вместо useHistory используем useNavigate (см. выше)

1:59:50 Row (CreareDevice.js) - здесь ОК

2:03:06 У меня REACT_APP_API_URL в консоле показала undefined. Вылечилось перезапуском клиента.

??? 2:09:15 user.setUser(user)
??? Может надо user.setUser(data)?

2:10:33  вместо useHistory используем useNavigate (см. выше)
    `} </pre>, example: <pre>{`
        
    `} </pre>, id: 3022 },
    {title: " observer" , text: <pre>{`
    import { observer } from 'mobx-react-lite';

         const NameFunct = observer(() => {
         })
    `} </pre>, example: "Что бы  mobx мог отслеживать  и перерисовывать в режиме реального времени", id: 3023 },
    {title: " useLocation()", text: <pre>{`
    const location = useLocation()
    console.log(location);`}</pre>, example: "Можно получить маршрут в сторке запроса", id: 3024 },
    { title: "Колонка с выбором", text: <pre>{`
       import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import ListGroup from "react-bootstrap/ListGroup"

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map( type => 
                <ListGroup.Item 
                   active={type.id === device.selectedType.id}
                   onClick={()=> device.setSelectedType(type)}
                   key={type.id}>

                    {type.name}

                </ListGroup.Item>
                )}
        </ListGroup>
    );
});

export default TypeBar;
    `}</pre>, example: "", id: 3025 },
    { title: "useNavigate()// что бы знать какой товар выбран", text: <pre>{`
      import { useNavigate } from 'react-router-dom';
      import { DEVICE_ROUTE } from '../utils/consts';

      const history = useNavigate()// что бы знать какой товар выбран

      .....

        <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + device.id)} >....
    `}</pre>, example: " По клику на объекте добавляем  / и id", id: 3026 },
    { title: "", text: "", example: "", id: 3027 },
    { title: "", text: "", example: "", id: 3028 },   
    { title: "", text: "", example: "", id: 3029 },
    { title: "", text: "", example: "", id: 3030 },
    { title: "", text: "", example: "", id: 3031 },
    { title: "", text: "", example: "", id: 3032 },
    { title: "", text: "", example: "", id: 3033 },
    { title: "", text: "", example: "", id: 3034 },
   
    { title: "Инпут с двухсторонней связкой", text: "const [forInput, setForInput] = useState({ nameInput: ''})", example: " <input className='block_input' placeholder='Написать функци' type='text' value={forInput.nameInput} onChange={e => setForInput({ nameInput: e.target.value })} />", id: 3100 },
    { title: "Кнопка с функцией", text: "function increment() { setLikes(likes + 1)}", example: " <button onClick={increment}>Добавить</button>", id: 3101 },
])