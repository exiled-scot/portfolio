node {
  stage 'Checkout'
  git url: 'https://github.com/exiled-scot/portfolio.git', branch: 'main'

  stage 'deploy'
  sh './deploy.sh'
}
