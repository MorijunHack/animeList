import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// スクロールバー
import { Scrollbars } from 'react-custom-scrollbars';

// GoogleAnalysis
import WithTracker from '../components/WithTracker';

// CoocleAnalysis
import AdSense from 'react-adsense';

// スタイル
const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
    },
    footer: {
        marginTop: 'auto'
    }
});

const WrapMainContent = (WrappedComponent, options = {}) => {
    const HOC = class extends Component {
        render(){
            const { classes, ...other_props} = this.props;
            
            return (
                <Scrollbars>
                    <div className={classes.wrapper}>
                        <WrappedComponent {...other_props} />

                        <div className={classes.footer}>
                            <AdSense.Google client='ca-pub-3774224802378126' slot='5432750074' style={{display: 'block'}} format='auto' responsive='true' />
                        </div>
                    </div>
                </Scrollbars>
            );
        }
    };

return (
    WithTracker( //Google Analystics用Wrapper
      withStyles(styles, { withTheme: true })(HOC)
    )
  );
};

export default WrapMainContent;