import React, { Component } from "react";
import Slider from "react-slick";
import ImageOne from "../../assets/slide-one.jpg";
import ImageTwo from "../../assets/slide-two.jpg";
import ImageThree from "../../assets/slide-three.jpg";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    sliderHolder:{
        margin: '20px auto',
        width: 300,
        height: 300,
        userSelect: "none",
        padding: '0 10px',
        [theme.breakpoints.up("sm")]:{
            width: 600,
            height: 600,
            padding: '0 30px'
        }
    },
    imageHolder: {
        width: 250,
        height: 250,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        margin: '0 0 50px 0',
        userSelect: "none",
        "&:focus":{
          outline: 'none'
        },
        [theme.breakpoints.up("sm")]:{
            margin: '0 0 60px 0'
        },
        "& > .imageOne":{
            borderRadius: '50%',
            width: 250,
            height: 250,
            margin:'0 auto',
            backgroundImage: `url(${ImageOne})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop:30,
        },
        "& > .imageTwo":{
            borderRadius: '50%',
            width: 250,
            height: 250,
            margin:'0 auto',
            backgroundImage: `url(${ImageTwo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop:30,
        },
        "& > .imageThree":{
            borderRadius: '50%',
            width: 250,
            height: 250,
            margin:'0 auto',
            backgroundImage: `url(${ImageThree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop:30,
        },
        "& > div":{
            textAlign: 'center',
            margin: '10px 0',
            fontWeight: 900,
            fontSize: 16,
            [theme.breakpoints.up("sm")]:{
                fontSize: 22,
            },
        },
        "& > span":{
            textAlign: 'center',
            margin: '10px 0',
            fontSize: 14,
            display:'block',
            "& > span":{
                display:'block'
            },
            [theme.breakpoints.up("sm")]:{
                fontSize: 18
            },
        }
    }
})
class CustomSlider extends Component {
  render() {
    const { classes } = this.props;
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={classes.sliderHolder}>
        <Slider {...settings} arrows={true}>
          <div className={classes.imageHolder}>
            <div className="imageOne"></div>
            <div>Alex Nowak</div>
            <span>Lorem ipsum dolor sit amet, consectetur <span>adipisicing elit sed do.</span></span>
          </div>
          <div className={classes.imageHolder}>
            <div className="imageTwo"></div>
            <div>Paul Maffey</div>
            <span>Lorem ipsum dolor sit amet, consectetur <span>adipisicing elit sed do.</span></span>
          </div>
          <div className={classes.imageHolder}>
            <div className="imageThree"></div>
            <div>Andrew Schulz</div>
            <span>Lorem ipsum dolor sit amet, consectetur <span>adipisicing elit sed do.</span></span>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(CustomSlider);
