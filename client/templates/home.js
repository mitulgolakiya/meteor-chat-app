/**
 * Created by Mitul on 01/01/15.
 */

function buildPie() {
    return new Highcharts.Chart({
        chart: {
            renderTo: 'pieChart',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: "Test Pie Chart"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data: Categories.find().fetch()
        }]
    });
}

if(Meteor.isClient)
{
    Template.home.helpers({
        currUserName: function () {
            return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
        }
    });

    Template.home.rendered = function () {
        var chart = buildPie();
        this.autorun(function () {
            chart.series[0].setData(Categories.find({}).fetch());
        });
    };

    Template.home.events({
        'click .btn-primary': function () {
            Categories.insert({
                name: "Category",
                y: 24,
                color: randomColor()
            });
        }
    });
}

