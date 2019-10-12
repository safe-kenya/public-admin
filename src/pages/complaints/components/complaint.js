import React from 'react'

const ComplaintView = ({ complaint, onClickDelete }) => {
  if(complaint){
    return (
    <div className="kt-portlet">
      <div className="kt-portlet__head">
        <div class="kt-portlet__head-label">
					<span class="kt-portlet__head-icon">
						<i class="flaticon-interface-2"></i>
					</span>
          <h3 className="kt-portlet__head-title kt-heading kt-heading--center kt-heading--thin">
            {complaint.parent && complaint.parent.name}
						<small>at {complaint.time}</small>
					</h3>			
				</div>
        <div class="kt-portlet__head-toolbar">
					<div class="kt-portlet__head-group">
						<div class="btn-group">
							<button type="button" class="btn btn-pill btn-outline-brand btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Actions
							</button>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" onClick={onClickDelete}>Delete</a>
							</div>
						</div>
					</div>
				</div>
      </div>
      <div className="kt-portlet__body">
        {complaint.content}
      </div>
      <div className="card-footer">
        <div className="row">
          <textarea className="form-control col-md-6 my-2"></textarea>
          <button className="btn btn-primary btn-sm pull-right">Respond</button>
        </div>
      </div>
    </div>
    )
  } else {
    return null
  }
}

export default ComplaintView