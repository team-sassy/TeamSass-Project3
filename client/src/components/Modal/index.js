import React from "react";
import {Modal, Button} from "react-materialize";


// render() {
//     return (
//         <>
//             <Modal
//                 header='Modal Header'
//                 bottomSheet
//                 trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
//              </Modal>
//         </>
//     )
// }


function MyModal () {
    return (
    
         <Modal
            header='Modal Header'
          
            trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Modal>
        );
    }







export default MyModal;