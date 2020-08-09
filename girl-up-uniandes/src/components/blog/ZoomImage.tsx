import React, { Fragment, useState, useCallback, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { Portal, Backdrop} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.modal,
        backgroundColor: "rgba(0, 0, 0, 0.8)"
      },
      portalImgWrapper: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: theme.zIndex.modal,
        cursor: "pointer"
      },
      portalImgInnerWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      },
      portalImg: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%"
      },
  img: {
    width: "100%",
    height: "auto"
  },
}));

interface Props {
    alt: string | any;
    src: string | any;
}

function ZoomImage({ alt, src} : Props) {
const classes = useStyles();   
  const [zoomedIn, setZoomedIn] = useState(false);
  const [scrollbarSize] = useState(null);

  const zoomIn = useCallback(() => {
    setZoomedIn(true);
  }, [setZoomedIn]);

  const zoomOut = useCallback(() => {
    setZoomedIn(false);
  }, [setZoomedIn]);

  useEffect(() => {
    if (zoomedIn) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarSize}px`;
        document.querySelector(
          "header"
        )!.style.paddingRight = `${scrollbarSize}px`;
      } else {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
        document.querySelector("header")!.style.paddingRight = "0px";
      }
    }, [zoomedIn, scrollbarSize]);

  return (
    <Fragment>
      <Backdrop
        open={zoomedIn}
        className={classes.backdrop}
        onClick={zoomOut}
      ></Backdrop>
      {zoomedIn && (
        <Portal>
          <div onClick={zoomOut} className={classes.portalImgWrapper}>
            <div className={classNames(classes.portalImgInnerWrapper, classes.img)}>
              <img
                alt={alt}
                src={src}
                className={classes.portalImg}
              ></img>
            </div>
          </div>
        </Portal>
      )}
      <img
        alt={alt}
        src={src}
        onClick={zoomIn}
        style={{ cursor: "pointer", width: "100%", height: "auto"}}
      ></img>
    </Fragment>
  );
}

export default (ZoomImage);
