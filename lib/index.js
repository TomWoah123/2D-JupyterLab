module.exports = [
  {
    id: '2D-Jupyter',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension 2D-Jupyter is activated!'
      );
      console.log(app.commands);
    }
  }
];
