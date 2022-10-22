import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../listitem/Listitem';
import './list.scss';

export default function List({ list }) {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setisMoved] = useState(false);
    const imgUrlArrays = [
        'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/150069306_3911047478990177_184199094642308354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6SY3DmV2QM4AX8ob0kO&_nc_ht=scontent-itm1-1.xx&oh=00_AT_UuAUjMZKX1VCGLwClWnQNg4Vu8eNEzoamHlwiL2YF1w&oe=6368076A',
        'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/178127511_4112155802212676_2770685277992304846_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCdeikfl_JkAX-nVPeI&_nc_ht=scontent-itm1-1.xx&oh=00_AT9Ttt2I4uIhtj2TP4gk34M3iuav06sAFdCNy8M9peOb2w&oe=6367ECC1',
        'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/178121813_4112155765546013_8292400334661130639_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Zoswisttn7wAX91Jh2x&_nc_ht=scontent-itm1-1.xx&oh=00_AT-5rBfj8abIO27npd5sJEd6aMWI8J_mPtJpmDsyip5IrA&oe=6367917C',
        'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/163523424_4009052345856356_8644733701576205657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fafuEdA_-9EAX9T2Chk&_nc_ht=scontent-itm1-1.xx&oh=00_AT8j1UoKdjsIPwlcJWs0FDT0jbHgUXqzVlF37R-VOuaTXQ&oe=63659306',
        'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/130831493_3750698615025065_2926656455877148353_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tFvgzYiwYAoAX9XICv4&_nc_ht=scontent-itm1-1.xx&oh=00_AT91WgbMuq49T7mknon4eWiUjps1ieiXp31QWoK9guHrhw&oe=63682480',
    ];
    if (slideNumber === 0 && isMoved == true) {
        setisMoved(false);
    }
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        setisMoved(true);

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px )`;
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${distance - 230}px )`;
        }

        console.log(distance);
    };

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                />

                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => {
                        return <ListItem key={i} item={item} index={i} />;
                    })}
                </div>

                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick('right')}
                    style={{ display: isMoved && slideNumber === 5 && 'none' }}
                />
            </div>
        </div>
    );
}
