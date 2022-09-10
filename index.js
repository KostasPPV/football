let homegoal = 0
let awaygoal= 0
function h_goal(){
    homegoal += 1
    document.getElementById("h_goals").textContent = homegoal
}
function a_goal(){
    awaygoal += 1
    document.getElementById("a_goals").textContent = awaygoal
}