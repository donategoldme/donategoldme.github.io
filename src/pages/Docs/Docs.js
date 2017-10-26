import React from 'react';

export const Docs = () => {
  return (
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div id="navbar-docs" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-preinstall">Preinstall</a>
          <a class="list-group-item list-group-item-action" href="#list-backend">Backend</a>
          <a class="list-group-item list-group-item-action" href="#list-frontend">Frontend</a>
          <a class="list-group-item list-group-item-action" href="#list-nginx">Nginx</a>
        </div>
      </div>
      <div class="col-md-9 col-sm-12">
        <div data-spy="scroll" data-target="#navbar-docs" data-offset="0" class="scrollspy">
          <h4 id="list-preinstall">Preinstall</h4>
          <p>Service use <a href="https://www.docker.com/" target="_blank">docker</a>. Please, install docker before you start.</p>
          <h4 id="list-backend"><a href="https://github.com/donategoldme/backend" target="_blank">Backend</a></h4>
          <p>Clone repository to an empty directory.</p>
          <p><code>git clone https://github.com/donategoldme/backend.git</code></p>
          <p>Run bash script <b>run_first.sh</b> for start <a href="https://www.postgresql.org/" target="_blank">postgreSQL</a>, <a href="https://tarantool.org/" target="_blank">tarantool</a> and <a href="https://github.com/centrifugal/centrifugo" target="_blank">centrifugo</a>.</p>
          <p>Run background service for chats parse <b>run_chats_service.sh</b>.</p>
          <p>Run backend for site <b>run_backend.sh</b></p>
          <h4 id="list-frontend"><a href="https://github.com/donategoldme/frontend" target="_blank">Frontend</a></h4>
          <p>Clone repository to an empty directory.</p>
          <p><code>git clone https://github.com/donategoldme/frontend.git</code></p>
          <p>Run script <b>run_dev_front.sh</b> for development or <b>run_prod_front.sh</b> for production.</p>
          <h4 id="list-nginx"><a href="https://github.com/donategoldme/nginx" target="_blank">Nginx</a></h4>
          <p>Clone repository to an empty directory.</p>
          <p><code>git clone https://github.com/donategoldme/nginx.git</code></p>
          <p>Join to dir <b>creaters</b> and run <b>npm run build</b> for build scripts and static pages.</p>
          <p>Return to main directory and run <b>run_nginx</b></p>
        </div>
      </div>
    </div>
  )
}