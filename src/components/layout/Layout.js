import classes from './Layout.module.css';
import MainNevigation from './MainNavigation';

function Layout(props) {
    return <div>
        <MainNevigation />
        <main className= {classes.main}>
            {props.children}
        </main>
    </div>
}
 export default Layout;