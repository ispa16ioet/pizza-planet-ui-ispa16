fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        for (let i = 0; i < report.length; i++) {
            create_section(report[i]['report_name'],report[i]['description'],report[i]['report_id'])
            report[i]['data'].map(element => create_report_template(element['value_name'],element['total_value'],report[i]['report_id'],report[i]['symbol']));
        }
        //let rows = orders.map(element => createOrderTemplate(element));
        
        
        //table.append(rows);
    });

function create_report_template(name,value,id,symbol){
    const card = `
    <div class="card mb-4 box-shadow">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">${name}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
        ${symbol}${value}<small class="text-muted"> </small>
        </h1>
        <br>
        <button type="button" class="btn btn-lg btn-block btn-primary">
          Direct Link
        </button>
      </div>
    </div>
  `;
  const element = document.getElementById(id);
  element.innerHTML += card;
}

function create_section(name, description, id){
    const section = `<br>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">${name}</h1>
        <p class="lead">
        ${description}
        </p>
        </div>
        <div class="container">
        <div class="card-deck mb-3 text-center" id="${id}"></div>
        </div>  `;
        
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML += (section);
}