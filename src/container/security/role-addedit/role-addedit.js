import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class RoleAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'kind',
      value: 1,
      hidden: true
    }, {
      title: '角色名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '角色等级',
      field: 'level',
      required: true,
      type: 'select',
      key: 'role_level'
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 630007,
      addCode: 630000,
      editCode: 630002
    });
  }
}

export default RoleAddEdit;
